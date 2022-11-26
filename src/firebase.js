// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "custom-sticker-a9385.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "custom-sticker-a9385.appspot.com",
  messagingSenderId: "585926828225",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-3H1EX3VM11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
