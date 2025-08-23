
import { supabaseClient, isSupabaseConfigured } from './supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

// A simple type definition for the expected child data structure.
// This should be expanded as more data types are sent from the child app.
export interface ChildData {
  deviceInfo?: {
    battery: number;
    wifi: string;
    isOnline: boolean;
  };
  location?: {
    latitude: number;
    longitude: number;
    timestamp: number;
  };
  webHistory?: {
    url: string;
    category: string;
    time: string;
    incognito: boolean;
    query?: string;
  }[];
  callLogs?: any[];
  messages?: any[];
}

export interface ScreenData {
    url: string; // The URL from Supabase Storage, labeled 'last_frame' in user's logic
    timestamp: number;
}


/**
 * Listens for real-time data updates from a specific child device path in Supabase.
 * @param deviceId The ID of the child device to listen to.
 * @param callback The function to execute with the new data.
 * @returns A Supabase realtime channel to unsubscribe from.
 */
export const listenToChildData = (deviceId: string, callback: (data: ChildData | null) => void): RealtimeChannel | null => {
  if (!isSupabaseConfigured) {
    console.error("Supabase not configured, cannot listen to child data.");
    return null;
  }
  try {
    const channel = supabaseClient
      .channel(`device-telemetry-${deviceId}`)
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'telemetry',
          filter: `device_id=eq.${deviceId}`
        },
        (payload) => {
          // Assuming the new data is in payload.new and it's the full telemetry object
          callback(payload.new as ChildData | null);
        }
      )
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log(`Subscribed to telemetry for device ${deviceId}`);
        }
        if (err) {
            console.error(`Error subscribing to telemetry for device ${deviceId}`, err);
        }
      });
    
    return channel;

  } catch (error) {
    console.error("Failed to initialize Supabase listener:", error);
    return null;
  }
};

/**
 * Listens for real-time screen data updates for screen mirroring.
 * @param deviceId The ID of the child device to listen to.
 * @param callback The function to execute with the new screen data.
 * @returns A Supabase realtime channel to unsubscribe from.
 */
export const listenToScreenData = (deviceId: string, callback: (data: ScreenData | null) => void): RealtimeChannel | null => {
    if (!isSupabaseConfigured) {
        console.error("Supabase not configured, cannot listen to screen data.");
        return null;
    }
    try {
        const channel = supabaseClient
          .channel(`live-screen-${deviceId}`)
          .on(
            'postgres_changes',
            { 
              event: 'UPDATE', 
              schema: 'public', 
              table: 'live_screens',
              filter: `device_id=eq.${deviceId}`
            },
            (payload) => {
              const newData = payload.new as { last_frame: string; timestamp: string };
              if (newData && newData.last_frame) {
                  callback({ url: newData.last_frame, timestamp: new Date(newData.timestamp).getTime() });
              } else {
                  callback(null);
              }
            }
          )
          .subscribe((status, err) => {
            if (status === 'SUBSCRIBED') {
              console.log(`Subscribed to live screen for device ${deviceId}`);
            }
            if (err) {
                console.error(`Error subscribing to live screen for device ${deviceId}`, err);
            }
          });

        return channel;

    } catch (error) {
        console.error("Failed to initialize Supabase screen listener:", error);
        return null;
    }
}
