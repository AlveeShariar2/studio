import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

let supabase: SupabaseClient;

function getSupabaseClient(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured. Please add your credentials to the .env file.");
  }
  if (!supabase) {
    supabase = createClient(supabaseUrl!, supabaseAnonKey!);
  }
  return supabase;
}

export const supabaseClient = getSupabaseClient();

export async function sendCommandToDevice(deviceId: string, commandType: string, params: Record<string, any> = {}) {
  if (!isSupabaseConfigured) throw new Error("Supabase not configured.");
  
  const client = getSupabaseClient();
  const commandId = `cmd_${Date.now()}`;
  
  const { error } = await client
    .from('commands')
    .insert({
      id: commandId,
      device_id: deviceId,
      command_type: commandType,
      params: params,
      status: 'pending',
    });

  if (error) {
    console.error("Failed to send command:", error);
    throw error;
  }

  return commandId;
}
