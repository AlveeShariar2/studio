// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyCcKg3mdVxYbsphopCbYIKHkYoe4ys8M",
  authDomain: "spymax-813e6.firebaseapp.com",
  databaseURL: "https://spymax-813e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spymax-813e6",
  storageBucket: "spymax-813e6.appspot.com",
  messagingSenderId: "833256600073",
  appId: "1:833256600073:web:3046bc7be503691f87fed8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
