import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getDatabase, type Database, ref, set, serverTimestamp } from "firebase/database";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = !!firebaseConfig.apiKey;

let app: FirebaseApp;
let auth: Auth;
let db: Database;
let storage: FirebaseStorage;

function getFirebaseApp() {
    if (!isFirebaseConfigured) {
        throw new Error("Firebase is not configured. Please add your credentials to the .env file.");
    }
    if (getApps().length === 0) {
        app = initializeApp(firebaseConfig);
    } else {
        app = getApp();
    }
    return app;
}

function getFirebaseAuth() {
    if (!auth) {
        auth = getAuth(getFirebaseApp());
    }
    return auth;
}

function getFirebaseDatabase() {
    if (!db) {
        db = getDatabase(getFirebaseApp());
    }
    return db;
}

function getFirebaseStorage() {
    if (!storage) {
        storage = getStorage(getFirebaseApp());
    }
    return storage;
}

export async function sendCommandToDevice(deviceId: string, commandType: string, params: Record<string, any> = {}) {
  if (!isFirebaseConfigured) throw new Error("Firebase not configured.");
  
  const db = getFirebaseDatabase();
  const commandId = `cmd_${Date.now()}`;
  const commandRef = ref(db, `devices/${deviceId}/commands/${commandId}`);
  
  await set(commandRef, {
    type: commandType,
    params: params,
    status: 'pending',
    createdAt: serverTimestamp(),
  });

  return commandId;
}

export { getFirebaseAuth, getFirebaseDatabase, getFirebaseStorage };