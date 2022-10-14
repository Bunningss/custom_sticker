// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCECQRzicu1MEEE2P2ye4yg-ZiVfOcqas8",
  authDomain: "custom-sticker-a9385.firebaseapp.com",
  projectId: "custom-sticker-a9385",
  storageBucket: "custom-sticker-a9385.appspot.com",
  messagingSenderId: "585926828225",
  appId: "1:585926828225:web:b13ff9e4d33aaadf0bf440",
  measurementId: "G-3H1EX3VM11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;