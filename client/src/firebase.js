// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-8161d.firebaseapp.com",
  projectId: "mern-app-8161d",
  storageBucket: "mern-app-8161d.appspot.com",
  messagingSenderId: "376078938289",
  appId: "1:376078938289:web:0efb8598c8bdd33366f290"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);