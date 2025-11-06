import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = "https://wpuizozsgosutknqwlkh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwdWl6b3pzZ29zdXRrbnF3bGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0Mjk1MTIsImV4cCI6MjA3ODAwNTUxMn0.bwyJx53GkL0TZ3z1cBuJfmTsVZoL1dVlASW2Cgqdarc";
// Fallback for when environment variables are not set
// PLEASE REPLACE these with your actual Supabase URL and Anon Key
// Or better, set them in a .env.local file
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'YOUR_SUPABASE_URL',
  supabaseAnonKey || 'YOUR_SUPABASE_ANON_KEY'
);