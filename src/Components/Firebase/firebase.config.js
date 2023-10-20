// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxnMbkpmlRg0xz5aNd3mVhtBd6kYlU_wE",
  authDomain: "automotive-47f49.firebaseapp.com",
  projectId: "automotive-47f49",
  storageBucket: "automotive-47f49.appspot.com",
  messagingSenderId: "885443437686",
  appId: "1:885443437686:web:90a3c8e17c2c10aa73ab57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);