// // /* src/api/aboutApi.js */
// // // import { supabase } from '../supabaseClient';
// // import { v4 as uuidv4 } from 'uuid'; // Install with: npm install uuid
// // import { supabase } from '../supabaseClient';
// // const MEDIA_BUCKET = 'about_page_media';

// // /**
// //  * Fetches all content for the About page.
// //  * Transforms the array into a key-value object for easier use.
// //  * e.g., { about_hero: {...}, timeline: {...} }
// //  */
// // export const getAboutPageContent = async () => {
// //   const { data, error } = await supabase
// //     .from('about_page_content')
// //     .select('section_name, content');

// //   if (error) {
// //     console.error('Error fetching about page content:', error);
// //     throw new Error(error.message);
// //   }

// //   // Transform the array into a structured object
// //   const contentObject = data.reduce((acc, section) => {
// //     acc[section.section_name] = section.content;
// //     return acc;
// //   }, {});

// //   return contentObject;
// // };

// // /**
// //  * Updates the JSONB content for a specific section.
// //  * @param {string} sectionName - The 'section_name' (e.g., 'about_hero')
// //  * @param {object|Array} newContent - The new JSONB to save
// //  */
// // export const updateAboutSectionContent = async (sectionName, newContent) => {
// //   const { data, error } = await supabase
// //     .from('about_page_content')
// //     .update({ content: newContent, updated_at: new Date() })
// //     .eq('section_name', sectionName)
// //     .select(); // Returns the updated row

// //   if (error) {
// //     console.error(`Error updating ${sectionName}:`, error);
// //     throw new Error(error.message);
// //   }

// //   return data[0];
// // };

// // /**
// //  * Uploads a file (image or video) to Supabase Storage.
// //  * @param {File} file - The file from an <input type="file">
// //  * @returns {object} { publicUrl, storagePath }
// //  */
// // export const uploadFile = async (file) => {
// //   const fileExt = file.name.split('.').pop();
// //   const fileName = `${uuidv4()}.${fileExt}`;
// //   const storagePath = `${fileName}`;

// //   const { data, error } = await supabase.storage
// //     .from(MEDIA_BUCKET)
// //     .upload(storagePath, file);

// //   if (error) {
// //     console.error('Error uploading file:', error);
// //     throw new Error(error.message);
// //   }

// //   // Get the public URL
// //   const { data: publicUrlData } = supabase.storage
// //     .from(MEDIA_BUCKET)
// //     .getPublicUrl(storagePath);

// //   if (!publicUrlData) {
// //     throw new Error('Could not get public URL after upload.');
// //   }

// //   return {
// //     publicUrl: publicUrlData.publicUrl,
// //     storagePath: storagePath,
// //   };
// // };

// // /**
// //  * Deletes a file from Supabase Storage.
// //  * @param {string} storagePath - The 'storagePath' saved in our database
// //  */
// // export const deleteFile = async (storagePath) => {
// //   if (!storagePath) {
// //     console.warn('No storagePath provided for deletion.');
// //     return;
// //   }

// //   const { data, error } = await supabase.storage
// //     .from(MEDIA_BUCKET)
// //     .remove([storagePath]);

// //   if (error) {
// //     console.error('Error deleting file:', error);
// //   }

// //   return data;
// // };

// // /**
// //  * Atomically updates a file.
// //  * 1. Uploads the new file
// //  * 2. Deletes the old file (if one exists)
// //  * @param {File} newFile - The new file to upload
// //  * @param {string} oldStoragePath - The path of the old file to delete
// //  */
// // export const updateFile = async (newFile, oldStoragePath) => {
// //   // 1. Upload new file
// //   const uploadResult = await uploadFile(newFile);

// //   // 2. Delete old file
// //   if (oldStoragePath) {
// //     await deleteFile(oldStoragePath);
// //   }

// //   // 3. Return new file's data
// //   return uploadResult;
// // };

// /*
// * src/api/aboutApi.js
// *
// * This API file manages all data for the `about_page_content` table
// * and the `about_page_media` storage bucket.
// */
// import { supabase } from '../supabaseClient';
// import { v4 as uuidv4 } from 'uuid'; // For unique file names

// // The name of your Supabase Storage bucket for this page
// const MEDIA_BUCKET = 'about_page_media';

// /**
//  * Fetches all content for the About page.
//  * Transforms the array into a key-value object for easier use.
//  * e.g., { about_hero: {...}, timeline: {...} }
//  */
// export const getAboutPageContent = async () => {
//   const { data, error } = await supabase
//     .from('about_page_content')
//     .select('section_name, content');

//   if (error) {
//     console.error('Error fetching about page content:', error);
//     throw new Error(error.message);
//   }

//   // Transform the array into a structured object for easy access
//   const contentObject = data.reduce((acc, section) => {
//     acc[section.section_name] = section.content;
//     return acc;
//   }, {});

//   return contentObject;
// };

// /**
//  * Updates the JSONB content for a specific section of the About page.
//  * @param {string} sectionName - The 'section_name' (e.g., 'about_hero')
//  * @param {object|Array} newContent - The new JSONB to save
//  */
// export const updateAboutSectionContent = async (sectionName, newContent) => {
//   const { data, error } = await supabase
//     .from('about_page_content')
//     .update({ content: newContent, updated_at: new Date() })
//     .eq('section_name', sectionName)
//     .select(); // Returns the updated row

//   if (error) {
//     console.error(`Error updating ${sectionName}:`, error);
//     throw new Error(error.message);
//   }

//   return data[0];
// };

// /**
//  * Uploads a file (image or video) to the 'about_page_media' bucket.
//  * @param {File} file - The file from an <input type="file">
//  * @returns {object} { publicUrl, storagePath }
//  */
// export const uploadFile = async (file) => {
//   const fileExt = file.name.split('.').pop();
//   const fileName = `${uuidv4()}.${fileExt}`;
//   const storagePath = `${fileName}`;

//   const { data, error } = await supabase.storage
//     .from(MEDIA_BUCKET)
//     .upload(storagePath, file);

//   if (error) {
//     console.error('Error uploading file:', error);
//     throw new Error(error.message);
//   }

//   // Get the public URL
//   const { data: publicUrlData } = supabase.storage
//     .from(MEDIA_BUCKET)
//     .getPublicUrl(storagePath);

//   if (!publicUrlData) {
//     throw new Error('Could not get public URL after upload.');
//   }

//   return {
//     publicUrl: publicUrlData.publicUrl,
//     storagePath: storagePath, // We save this path for future deletion
//   };
// };

// /**
//  * Deletes a file from the 'about_page_media' bucket.
//  * @param {string} storagePath - The 'storagePath' saved in our database
//  */
// export const deleteFile = async (storagePath) => {
//   if (!storagePath) {
//     console.warn('No storagePath provided for deletion.');
//     return;
//   }

//   const { data, error } = await supabase.storage
//     .from(MEDIA_BUCKET)
//     .remove([storagePath]);

//   if (error) {
//     // Don't throw an error, just log it.
//     // The file might already be deleted.
//     console.error('Error deleting file:', error);
//   }

//   return data;
// };

// /**
//  * Atomically updates a file:
//  * 1. Uploads the new file
//  * 2. Deletes the old file (if one exists)
//  * @param {File} newFile - The new file to upload
//  * @param {string} oldStoragePath - The path of the old file to delete
//  */
// export const updateFile = async (newFile, oldStoragePath) => {
//   // 1. Upload new file
//   const uploadResult = await uploadFile(newFile);

//   // 2. Delete old file, if it exists
//   if (oldStoragePath) {
//     await deleteFile(oldStoragePath);
//   }

//   // 3. Return new file's data
//   return uploadResult;
// };


/* src/api/aboutApi.js */

// import { supabase } from './supabaseClient'; // Assuming your client is here
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../supabaseClient';
const BUCKET_NAME = 'about_page_media';

/**
 * Fetches all content for the about page.
 * Returns a structured object with section_name as keys.
 */
export const getContent = async () => {
  const { data, error } = await supabase
    .from('about_page_content')
    .select('*');

  if (error) {
    console.error('Error fetching about page content:', error);
    throw error;
  }

  // Transform the array of rows into a key-value object
  // { about_hero: { content: {...} }, timeline: { content: {...} } }
  const contentMap = data.reduce((acc, row) => {
    acc[row.section_name] = row.content;
    return acc;
  }, {});

  return contentMap;
};

/**
 * Updates the JSONB content for a specific section.
 * @param {string} sectionName - The 'section_name' (e.g., 'about_hero')
 * @param {object} newContent - The new JSONB content to save
 */
export const updateSectionContent = async (sectionName, newContent) => {
  const { data, error } = await supabase
    .from('about_page_content')
    .update({ content: newContent, updated_at: new Date().toISOString() })
    .eq('section_name', sectionName)
    .select(); // Return the updated row

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

  if (error) {
    console.error('Error deleting file:', error);
  }
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
export const aboutApi = {
  getContent,
  updateSectionContent,
  deleteFile,
  uploadFile,
  updateFile,
};