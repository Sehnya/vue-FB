// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your Firebase configuration from the Firebase Console
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  // Add additional keys if needed, e.g. storageBucket, messagingSenderId, appId, etc.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in your app
export const db = getFirestore(app);
export const auth = getAuth(app);
