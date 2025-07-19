// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "netflix-gpt-80c4b.firebaseapp.com",
  projectId: "netflix-gpt-80c4b",
  storageBucket: "netflix-gpt-80c4b.appspot.com",
  messagingSenderId: "931976906774",
  appId: "1:931976906774:web:1eb7ab234a1086c4ef8d37",
  measurementId: "G-D8YY2QJ0KW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();

