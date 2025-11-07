/* src/api/buybackApi.js */

import { supabase } from '../supabaseClient'; // Assuming your client is here
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = 'buyback_page_media';
const TABLE_NAME = 'buyback_page_content';

/**
 * Fetches all content for the Buyback page.
 * Returns a structured object with section_name as keys.
 */
export const getContent = async () => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*');

  if (error) {
    console.error('Error fetching buyback page content:', error);
    throw error;
  }

  // Transform the array of rows into a key-value object
  const contentMap = data.reduce((acc, row) => {
    acc[row.section_name] = row.content;
    return acc;
  }, {});

  return contentMap;
};

/**
 * Updates the JSONB content for a specific section.
 * @param {string} sectionName - The 'section_name' (e.g., 'hero')
 * @param {object} newContent - The new JSONB content to save
 */
export const updateSectionContent = async (sectionName, newContent) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({ content: newContent, updated_at: new Date().toISOString() })
    .eq('section_name', sectionName)
    .select();

  if (error) {
    console.error(`Error updating ${sectionName}:`, error);
    throw error;
  }

  return data[0];
};

/**
 * Deletes a file from the storage bucket.
 * @param {string} storagePath - The path of the file to delete
 */
export const deleteFile = async (storagePath) => {
  if (!storagePath) return;
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([storagePath]);
  if (error) console.error('Error deleting file:', error);
};

/**
 * Uploads a new file to the storage bucket.
 * @param {File} file - The file to upload
 */
export const uploadFile = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const storagePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(storagePath, file);

  if (uploadError) {
    console.error('Error uploading file:', uploadError);
    throw uploadError;
  }

  const { data: publicUrlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(storagePath);

  return {
    publicUrl: publicUrlData.publicUrl,
    storagePath: storagePath,
  };
};

/**
 * A helper to replace a file. Deletes the old one if it exists,
 * uploads the new one, and returns the new URL and path.
 * @param {File} file - The new file
 * @param {string} oldStoragePath - The path of the file to replace
 */
export const updateFile = async (file, oldStoragePath) => {
  if (oldStoragePath) {
    await deleteFile(oldStoragePath);
  }
  return await uploadFile(file);
};

// Bundle all API functions into a single export
export const buybackApi = {
  getContent,
  updateSectionContent,
  deleteFile,
  uploadFile,
  updateFile,
};