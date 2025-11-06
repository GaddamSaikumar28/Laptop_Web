/* src/api/contentApi.js */
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid'; // Install with: npm install uuid

const MEDIA_BUCKET = 'page_media';

/**
 * Fetches all content for the home page.
 * Transforms the array into a key-value object for easier use.
 * e.g., { hero: {...}, stats: [...] }
 */
export const getHomePageContent = async () => {
  const { data, error } = await supabase
    .from('home_page_content')
    .select('section_name, content');

  if (error) {
    console.error('Error fetching page content:', error);
    throw new Error(error.message);
  }

  // Transform the array into a structured object
  const contentObject = data.reduce((acc, section) => {
    acc[section.section_name] = section.content;
    return acc;
  }, {});

  return contentObject;
};

/**
 * Updates the JSONB content for a specific section.
 * @param {string} sectionName - The 'section_name' (e.g., 'hero', 'stats')
 * @param {object|Array} newContent - The new JSONB to save
 */
export const updateSectionContent = async (sectionName, newContent) => {
  const { data, error } = await supabase
    .from('home_page_content')
    .update({ content: newContent, updated_at: new Date() })
    .eq('section_name', sectionName)
    .select(); // Returns the updated row

  if (error) {
    console.error(`Error updating ${sectionName}:`, error);
    throw new Error(error.message);
  }

  return data[0];
};

/**
 * Uploads a file (image or video) to Supabase Storage.
 * @param {File} file - The file from an <input type="file">
 * @returns {object} { publicUrl, storagePath }
 */
export const uploadFile = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const storagePath = `${fileName}`; // Keep paths simple

  const { data, error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .upload(storagePath, file);

  if (error) {
    console.error('Error uploading file:', error);
    throw new Error(error.message);
  }

  // Get the public URL
  const { data: publicUrlData } = supabase.storage
    .from(MEDIA_BUCKET)
    .getPublicUrl(storagePath);

  if (!publicUrlData) {
    throw new Error('Could not get public URL after upload.');
  }

  return {
    publicUrl: publicUrlData.publicUrl,
    storagePath: storagePath, // We save this path for future deletion
  };
};

/**
 * Deletes a file from Supabase Storage.
 * @param {string} storagePath - The 'storagePath' saved in our database
 */
export const deleteFile = async (storagePath) => {
  if (!storagePath) {
    console.warn('No storagePath provided for deletion.');
    return;
  }

  const { data, error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .remove([storagePath]);

  if (error) {
    console.error('Error deleting file:', error);
    // Don't throw, just log it. Maybe the file was already deleted.
  }

  return data;
};

/**
 * Atomically updates a file.
 * 1. Uploads the new file
 * 2. Deletes the old file (if one exists)
 * This fulfills your request to delete the old video on update.
 * @param {File} newFile - The new file to upload
 * @param {string} oldStoragePath - The path of the old file to delete
 */
export const updateFile = async (newFile, oldStoragePath) => {
  // 1. Upload new file
  const uploadResult = await uploadFile(newFile);

  // 2. Delete old file
  if (oldStoragePath) {
    await deleteFile(oldStoragePath);
  }

  // 3. Return new file's data
  return uploadResult;
};