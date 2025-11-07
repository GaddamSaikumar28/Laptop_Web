import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';

// --- Page Content API (JSONB) ---

/**
 * Fetches the content blob for a single page.
 * @param {string} pageId - e.g., 'warranty', 'quality_policy'
 */
export const getPageContent = async (pageId) => {
  const { data, error } = await supabase
    .from('page_content')
    .select('content')
    .eq('id', pageId)
    .single();

  if (error) {
    console.error(`Error fetching page content for ${pageId}:`, error);
    throw error;
  }
  return data.content;
};

/**
 * Updates the entire content blob for a single page.
 * @param {string} pageId - e.g., 'warranty'
 * @param {object} newContent - The new JSONB content object
 */
export const updatePageContent = async (pageId, newContent) => {
  const { data, error } = await supabase
    .from('page_content')
    .update({ content: newContent, updated_at: new Date() })
    .eq('id', pageId);

  if (error) {
    console.error(`Error updating page content for ${pageId}:`, error);
    throw error;
  }
  return data;
};

// --- List Content API (e.g., Certifications) ---

/**
 * Fetches all items from a list-based table.
 * @param {string} tableName - e.g., 'certifications'
 */
export const getListContent = async (tableName) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error(`Error fetching list content from ${tableName}:`, error);
    throw error;
  }
  return data;
};

/**
 * Upserts an array of items into a table.
 * Used by ListManagementModal's onSave.
 * @param {string} tableName - e.g., 'certifications'
 * @param {Array<object>} itemsArray - The full array of items to save.
 */
export const updateListContent = async (tableName, itemsArray) => {
  const { data, error } = await supabase
    .from(tableName)
    .upsert(itemsArray);

  if (error) {
    console.error(`Error upserting list content to ${tableName}:`, error);
    throw error;
  }
  return data;
};


// --- File API (for ListModal and EditableImage) ---
// These functions match the expectations of your ListManagementModal

const BUCKET_NAME = 'certification_files'; // Or make this dynamic

/**
 * Deletes a file from Supabase storage.
 * @param {string} storagePath - The full path, e.g., 'certification_files/public/image.png'
 */
export const deleteFile = async (storagePath) => {
  if (!storagePath) return;

  const [bucket, ...pathParts] = storagePath.split('/');
  if (!bucket || pathParts.length === 0) {
    console.error('Invalid storage path:', storagePath);
    return;
  }
  const filePath = pathParts.join('/');

  const { error } = await supabase.storage.from(bucket).remove([filePath]);
  if (error) {
    console.error('Error deleting file:', error);
  }
};

/**
 * Updates a file: deletes the old one (if provided) and uploads the new one.
 * @param {File} file - The new file to upload.
 * @param {string} oldStoragePath - The full path of the old file to delete.
 */
export const updateFile = async (file, oldStoragePath) => {
  // 1. Delete the old file if it exists
  if (oldStoragePath) {
    await deleteFile(oldStoragePath);
  }

  // 2. Upload the new file
  const filePath = `public/${uuidv4()}-${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading file:', uploadError);
    throw uploadError;
  }

  // 3. Get the public URL
  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return {
    publicUrl: urlData.publicUrl,
    storagePath: `${BUCKET_NAME}/${filePath}`, // Store the full path for deletion
  };
};


export const getPageSections = async (pageId) => {
  const { data, error } = await supabase
    .from('page_sections')
    .select('*')
    .eq('page_id', pageId)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error(`Error fetching page sections for ${pageId}:`, error);
    throw error;
  }
  return data;
};

/**
 * Synchronizes the entire set of sections for a page.
 * Deletes old, updates existing, and inserts new.
 * @param {string} pageId - e.g., 'warranty'
 * @param {Array<object>} sectionsArray - The FULL array of section objects
 */
export const syncPageSections = async (pageId, sectionsArray) => {
  // Add IDs and sort_order to any new items
  const processedSections = sectionsArray.map((section, index) => ({
    ...section,
    id: section.id || uuidv4(), // Assign ID if it's new
    sort_order: index, // Re-assign sort order based on array index
  }));

  const { error } = await supabase.rpc('sync_page_sections', {
    p_page_id: pageId,
    sections_data: processedSections,
  });

  if (error) {
    console.error(`Error syncing page sections for ${pageId}:`, error);
    throw error;
  }
  return processedSections; // Return the processed array to update local state
};


export const syncGalleryImages = async (imagesArray) => {
  // Add IDs and sort_order to any new items
  const processedImages = imagesArray.map((image, index) => ({
    ...image,
    id: image.id || uuidv4(), // Assign ID if it's new
    sort_order: index, // Re-assign sort order
    caption: image.caption || '',
  }));

  const { error } = await supabase.rpc('sync_gallery_images', {
    images_data: processedImages,
  });

  if (error) {
    console.error('Error syncing gallery images:', error);
    throw error;
  }
  return processedImages; // Return the processed array to update local state
};