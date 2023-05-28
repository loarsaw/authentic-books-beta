// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdRMeIOyM_M1HyopTOIZclHYcn3WnUXpw",
  authDomain: "authenticbooks-ab97c.firebaseapp.com",
  projectId: "authenticbooks-ab97c",
  storageBucket: "authenticbooks-ab97c.appspot.com",
  messagingSenderId: "727807442527",
  appId: "1:727807442527:web:8676f69545954033f9e5ea",
  measurementId: "G-N14NLL2WGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
