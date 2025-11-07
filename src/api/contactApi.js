/* src/api/contactApi.js */

import { supabase } from '../supabaseClient'; // Assuming your client is here
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = 'contact_page_media';
const CONTENT_TABLE = 'contact_page_content';
const SUBMISSIONS_TABLE = 'contact_form_submissions';

// --- Page Content CMS API ---

export const getContent = async () => {
  const { data, error } = await supabase
    .from(CONTENT_TABLE)
    .select('*');

  if (error) {
    console.error('Error fetching contact page content:', error);
    throw error;
  }
  const contentMap = data.reduce((acc, row) => {
    acc[row.section_name] = row.content;
    return acc;
  }, {});
  return contentMap;
};

export const updateSectionContent = async (sectionName, newContent) => {
  const { data, error } = await supabase
    .from(CONTENT_TABLE)
    .update({ content: newContent, updated_at: new Date().toISOString() })
    .eq('section_name', sectionName)
    .select();

  if (error) {
    console.error(`Error updating ${sectionName}:`, error);
    throw error;
  }
  return data[0];
};

// --- Form Submissions API ---

/**
 * Saves a new form submission.
 * This can be called by an anonymous user.
 * @param {object} formData - { name, email, subject, message }
 */
export const submitForm = async (formData) => {
  const { data, error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .insert([formData])
    .select();

  if (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
  return data;
};

/**
 * Fetches all form submissions.
 * This should only be called by an authenticated admin.
 */
export const getSubmissions = async () => {
  const { data, error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .select('*')
    .order('created_at', { ascending: false }); // Show newest first

  if (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
  return data;
};

/**
 * Updates a submission (e.g., to mark as read).
 * @param {number} id - The ID of the submission
 * @param {object} updates - { is_read: true }
 */
export const updateSubmission = async (id, updates) => {
  const { data, error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating submission:', error);
    throw error;
  }
  return data;
};

/**
 * Deletes a submission.
 * @param {number} id - The ID of the submission to delete
 */
export const deleteSubmission = async (id) => {
  const { error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting submission:', error);
    throw error;
  }
  return true;
};


// Bundle all API functions
export const contactApi = {
  getContent,
  updateSectionContent,
  submitForm,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
};