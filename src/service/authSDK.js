// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-3phMQ_hZNpQUAd7tRa-3nul_6APJcpI",
  authDomain: "super-food-s.firebaseapp.com",
  projectId: "super-food-s",
  storageBucket: "super-food-s.firebasestorage.app",
  messagingSenderId: "383468498799",
  appId: "1:383468498799:web:f3afa642636ae215d2029a",
  measurementId: "G-RB2RF1C8NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth