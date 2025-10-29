// supabase/functions/_shared/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Or your specific client URL
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};