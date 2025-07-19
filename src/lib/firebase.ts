import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyCcKg3mdVxYbsphopCbYIKHkYoe4ys8M",
  authDomain: "spymax-813e6.firebaseapp.com",
  databaseURL: "https://spymax-813e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spymax-813e6",
  storageBucket: "spymax-813e6.appspot.com",
  messagingSenderId: "833256600073",
  appId: "1:833256600073:web:3046bc7be503691f87fed8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };