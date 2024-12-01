// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByCBT3D_ewMxp5iAzT_zRDeTqf6TVPSyI",
  authDomain: "coffee-store-b72f3.firebaseapp.com",
  projectId: "coffee-store-b72f3",
  storageBucket: "coffee-store-b72f3.firebasestorage.app",
  messagingSenderId: "767940423079",
  appId: "1:767940423079:web:62ff97d33f7918a2385a82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
