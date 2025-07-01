// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr2hWbiHM4bw1bCxzTXGOSCaHBWC48t8E",
  authDomain: "eventflow-e8e79.firebaseapp.com",
  projectId: "eventflow-e8e79",
  storageBucket: "eventflow-e8e79.firebasestorage.app",
  messagingSenderId: "504008843144",
  appId: "1:504008843144:web:7a30847e98fbbc6bd1e43d",
  measurementId: "G-5YE8SRS1B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);