// // Follow this setup guide to integrate the Deno language server with your editor:
// // https://deno.land/manual/getting_started/setup_your_environment
// // This enables autocomplete, go to definition, etc.

// // Setup type definitions for built-in Supabase Runtime APIs
// import "jsr:@supabase/functions-js/edge-runtime.d.ts"

// console.log("Hello from Functions!")

// Deno.serve(async (req) => {
//   const { name } = await req.json()
//   const data = {
//     message: `Hello ${name}!`,
//   }

//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   )
// })

// /* To invoke locally:

//   1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
//   2. Make an HTTP request:

//   curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/get-admin-customer-details' \
//     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//     --header 'Content-Type: application/json' \
//     --data '{"name":"Functions"}'

// */

// supabase/functions/get-admin-customer-details/index.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
// import { corsHeaders } from '../_shared/cors.ts';
import { corsHeaders } from '../_shared/cors.ts';
console.log('Function "get-admin-customer-details" is starting...');

Deno.serve(async (req) => {
  // 1. Handle preflight CORS request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 2. Get the userId from the client's request
    const { userId } = await req.json();
    if (!userId) {
      throw new Error('userId is required.');
    }
    
    // 3. Create a new *ADMIN* Supabase client.
    // This safely uses the service_role key, which is set in your
    // project's environment variables (secrets).
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('supabase_service_role_key') ?? ''
    );

    console.log(`Fetching details for user: ${userId}`);

    // 4. Run your original admin logic from adminCustomerApi.js
    // Get Auth Info
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.getUserById(userId);
    if (authError) throw new Error(`Auth Error: ${authError.message}`);
    
    // Get Profile Info
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (profileError) throw new Error(`Profile Error: ${profileError.message}`);

    // Get Application Info
    const { data: application, error: appError } = await supabaseAdmin
      .from('customer_applications')
      .select('*')
      .eq('user_id', userId)
      .single();
    // This one might not exist yet, so we don't throw an error if it's not found
    if (appError && appError.code !== 'PGRST116') { // PGRST116 = 'no rows found'
       throw new Error(`Application Error: ${appError.message}`);
    }

    // 5. Bundle and return the data
    const customerDetails = {
      auth: authData.user,
      profile: profile,
      application: application || null // Send null if no application exists
    };

    return new Response(JSON.stringify(customerDetails), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});