// import { supabase } from '../supabaseClient.js'; // Added .js extension

// /**
//  * Signs up a new user.
//  * After successful auth.signUp, it creates a corresponding
//  * profile in the 'profiles' table.
//  */
// export const signUpApi = async ({ email, password, fullName }) => {
//   // 1. Sign up the user in auth.users
//   const { data: authData, error: authError } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   if (authError) throw authError;

//   // 2. If auth is successful, insert into 'profiles' table
//   // This links auth.users to public.profiles
//   const { error: profileError } = await supabase.from('profiles').insert({
//     id: authData.user.id,
//     full_name: fullName,
//     updated_at: new Date(),
//   });

//   if (profileError) {
//     // Handle potential error where auth user was created but profile wasn't
//     // For simplicity, we throw, but in production you might want to clean up the auth user
//     console.error('Error creating profile:', profileError);
//     throw profileError;
//   }

//   return authData;
// };

// /**
//  * Signs in an existing user.
//  */
// export const signInApi = async ({ email, password }) => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) throw error;
//   return data;
// };

// /**
//  * Signs out the current user.
//  */
// export const signOutApi = async () => {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw error;
// };

// /**
//  * Gets the current user session.
//  */
// export const getUserSession = async () => {
//   const { data, error } = await supabase.auth.getSession();
//   if (error) throw error;
//   return data.session;
// };

// /**
//  * Gets the full user profile from the 'profiles' table.
//  */
// export const getUserProfile = async (userId) => {
//   if (!userId) return null;

//   const { data, error } = await supabase
//     .from('profiles')
//     .select('full_name')
//     .eq('id', userId)
//     .single();

//   if (error) {
//     console.error('Error fetching profile:', error);
//     return null;
//   }
//   return data;
// };


import { supabase } from '../supabaseClient.js'; // Added .js extension

// import { supabase } from './supabaseClient.js'; // Changed to local path

/**
 * Signs up a new user.
 * After successful auth.signUp, it creates a corresponding
 * profile in the 'profiles' table.
 * * NOTE: We don't need to specify 'role' here. The database
 * will automatically set it to 'customer' because of the
 * 'DEFAULT' value we set in the SQL.
 */
export const signUpApi = async ({ email, password, fullName }) => {
  // 1. Sign up the user in auth.users
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // 2. If auth is successful, insert into 'profiles' table
  // This links auth.users to public.profiles
  const { error: profileError } = await supabase.from('profiles').insert({
    id: authData.user.id,
    full_name: fullName,
    updated_at: new Date(),
    // 'role' is automatically set to 'customer' by the database
  });

  if (profileError) {
    // Handle potential error where auth user was created but profile wasn't
    // For simplicity, we throw, but in production you might want to clean up the auth user
    console.error('Error creating profile:', profileError);
    throw profileError;
  }

  return authData;
};

/**
 * Signs in an existing user.
 */
export const signInApi = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

/**
 * Signs out the current user.
 */
export const signOutApi = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

/**
 * Gets the current user session.
 */
export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
};

/**
 * Gets the full user profile from the 'profiles' table.
 * --- UPDATED ---
 * Now selects the 'role' column as well.
 */
export const getUserProfile = async (userId) => {
  if (!userId) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('full_name, role') // <-- UPDATED: Fetch 'role'
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
  return data; // Now returns { full_name: '...', role: '...' }
};