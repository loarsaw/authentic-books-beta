// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDfMz4xYlsExWbPvtgqWNPzthJHUEFy91s',
  authDomain: 'authenticbooks-f1df3.firebaseapp.com',
  projectId: 'authenticbooks-f1df3',
  storageBucket: 'authenticbooks-f1df3.appspot.com',
  messagingSenderId: '133146308465',
  appId: '1:133146308465:web:6a946c1df349a628aed0d0',
  measurementId: 'G-CSC4DZ3ZL6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
