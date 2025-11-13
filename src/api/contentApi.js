// /* src/api/contentApi.js */
// import { supabase } from '../supabaseClient';
// import { v4 as uuidv4 } from 'uuid'; // Install with: npm install uuid

// const MEDIA_BUCKET = 'page_media';

// /**
//  * Fetches all content for the home page.
//  * Transforms the array into a key-value object for easier use.
//  * e.g., { hero: {...}, stats: [...] }
//  */
// export const getHomePageContent = async () => {
//   const { data, error } = await supabase
//     .from('home_page_content')
//     .select('section_name, content');

//   if (error) {
//     console.error('Error fetching page content:', error);
//     throw new Error(error.message);
//   }

//   // Transform the array into a structured object
//   const contentObject = data.reduce((acc, section) => {
//     acc[section.section_name] = section.content;
//     return acc;
//   }, {});

//   return contentObject;
// };

// /**
//  * Updates the JSONB content for a specific section.
//  * @param {string} sectionName - The 'section_name' (e.g., 'hero', 'stats')
//  * @param {object|Array} newContent - The new JSONB to save
//  */
// export const updateSectionContent = async (sectionName, newContent) => {
//   const { data, error } = await supabase
//     .from('home_page_content')
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
//  * Uploads a file (image or video) to Supabase Storage.
//  * @param {File} file - The file from an <input type="file">
//  * @returns {object} { publicUrl, storagePath }
//  */
// export const uploadFile = async (file) => {
//   const fileExt = file.name.split('.').pop();
//   const fileName = `${uuidv4()}.${fileExt}`;
//   const storagePath = `${fileName}`; // Keep paths simple

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
//  * Deletes a file from Supabase Storage.
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
//     console.error('Error deleting file:', error);
//     // Don't throw, just log it. Maybe the file was already deleted.
//   }

//   return data;
// };

// /**
//  * Atomically updates a file.
//  * 1. Uploads the new file
//  * 2. Deletes the old file (if one exists)
//  * This fulfills your request to delete the old video on update.
//  * @param {File} newFile - The new file to upload
//  * @param {string} oldStoragePath - The path of the old file to delete
//  */
// export const updateFile = async (newFile, oldStoragePath) => {
//   // 1. Upload new file
//   const uploadResult = await uploadFile(newFile);

//   // 2. Delete old file
//   if (oldStoragePath) {
//     await deleteFile(oldStoragePath);
//   }

//   // 3. Return new file's data
//   return uploadResult;
// };




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

  // --- NEW ---
  // Let's ensure the certificates_section has a default entry if it doesn't exist
  // This is good practice for new sections.
  if (!contentObject.certificates_section) {
    console.warn('No content for certificates_section, using default.');
    contentObject.certificates_section = {
      title: 'Our Certifications & Credentials',
      subtitle: 'We are committed to the highest standards of data security, environmental responsibility, and quality management.'
    };
    // Optionally, you could insert this default into the DB here
    // For now, we'll just use it in the app.
  }
  // --- END NEW ---

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
    console.error('Error updating section content:', error);
    throw new Error(error.message);
  }
  return data;
};

/**
 * Uploads a file to Supabase Storage.
 * @param {File} file - The file to upload
 */
export const uploadFile = async (file) => {
  if (!file) {
    throw new Error('No file provided to upload.');
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const storagePath = `certificates/${fileName}`; // Changed to a 'certificates' folder

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
  let newUploadData;
  try {
    newUploadData = await uploadFile(newFile);
  } catch (uploadError) {
    console.error('Failed to upload new file:', uploadError);
    throw new Error('Failed to upload new file. Aborting update.');
  }

  // 2. Delete old file (if one exists)
  if (oldStoragePath) {
    await deleteFile(oldStoragePath);
  }

  return newUploadData;
};


// --- NEW CERTIFICATE GALLERY FUNCTIONS ---

/**
 * Fetches all images from the certificate gallery.
 */
export const getCertificateGallery = async () => {
  const { data, error } = await supabase
    .from('certificate_gallery_images')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching certificate gallery:', error);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Adds a new certificate image to the gallery.
 * @param {File} file - The image file to upload.
 * @param {string} caption - The title/caption for the certificate.
 * @param {number} sortOrder - The sort order.
 */
export const addCertificateImage = async (file, caption, sortOrder) => {
  // 1. Upload the file
  const { publicUrl, storagePath } = await uploadFile(file);

  // 2. Add entry to the database
  const { data, error } = await supabase
    .from('certificate_gallery_images')
    .insert({
      image_url: publicUrl,
      image_storage_path: storagePath,
      caption: caption,
      sort_order: sortOrder || 0
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding certificate to database:', error);
    // If DB insert fails, try to delete the file we just uploaded
    await deleteFile(storagePath);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Updates an existing certificate image in the gallery.
 * @param {string} id - The UUID of the certificate row to update.
 * @param {object} updates - An object containing caption, sortOrder, newFile, and oldStoragePath.
 */
export const updateCertificateImage = async (id, { caption, sortOrder, newFile, oldStoragePath }) => {
  let dbUpdates = {
    caption: caption,
    sort_order: sortOrder,
  };

  // If a new file is provided, update it in storage and get new URLs
  if (newFile) {
    const { publicUrl, storagePath } = await updateFile(newFile, oldStoragePath);
    dbUpdates.image_url = publicUrl;
    dbUpdates.image_storage_path = storagePath;
  }

  // 3. Update the database entry
  const { data, error } = await supabase
    .from('certificate_gallery_images')
    .update(dbUpdates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating certificate in database:', error);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Deletes a certificate image from the gallery and storage.
 * @param {string} id - The UUID of the certificate row to delete.
 * @param {string} storagePath - The storage path of the file to delete.
 */
export const deleteCertificateImage = async (id, storagePath) => {
  // 1. Delete the database row
  const { error: dbError } = await supabase
    .from('certificate_gallery_images')
    .delete()
    .eq('id', id);

  if (dbError) {
    console.error('Error deleting certificate from database:', dbError);
    throw new Error(dbError.message);
  }

  // 2. Delete the file from storage
  await deleteFile(storagePath);

  return true; // Success
};