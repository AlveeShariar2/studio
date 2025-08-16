
import { getFirebaseDatabase } from './firebase';
import { ref, onValue, type Unsubscribe } from 'firebase/database';

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
    url: string;
    timestamp: number;
}


/**
 * Listens for real-time data updates from a specific child device path in Firebase.
 * @param deviceId The ID of the child device to listen to.
 * @param callback The function to execute with the new data.
 * @returns An unsubscribe function to stop listening.
 */
export const listenToChildData = (deviceId: string, callback: (data: ChildData | null) => void): Unsubscribe => {
  try {
    const db = getFirebaseDatabase();
    // Using a more structured path: `devices/{deviceId}/telemetry`
    const childDataRef = ref(db, `devices/${deviceId}/telemetry`);
    
    const unsubscribe = onValue(childDataRef, (snapshot) => {
      const data = snapshot.val();
      callback(data as ChildData | null);
    }, (error) => {
      console.error("Firebase data listening error:", error);
      callback(null); // Pass null on error
    });

    return unsubscribe;

  } catch (error) {
    console.error("Failed to initialize Firebase listener:", error);
    // Return a no-op function if Firebase isn't configured or fails
    return () => {};
  }
};

/**
 * Listens for real-time screen data updates for screen mirroring.
 * @param deviceId The ID of the child device to listen to.
 * @param callback The function to execute with the new screen data.
 * @returns An unsubscribe function to stop listening.
 */
export const listenToScreenData = (deviceId: string, callback: (data: ScreenData | null) => void): Unsubscribe => {
    try {
        const db = getFirebaseDatabase();
        const screenDataRef = ref(db, `devices/${deviceId}/screen`);

        const unsubscribe = onValue(screenDataRef, (snapshot) => {
            const data = snapshot.val();
            callback(data as ScreenData | null);
        }, (error) => {
            console.error("Firebase screen data listening error:", error);
            callback(null);
        });

        return unsubscribe;

    } catch (error) {
        console.error("Failed to initialize Firebase screen listener:", error);
        return () => {};
    }
}
