// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2zG7hkYPn5vL8EbRY5FRZsAdKs0QlT_g",
  authDomain: "netflix-gpt-b65e7.firebaseapp.com",
  projectId: "netflix-gpt-b65e7",
  storageBucket: "netflix-gpt-b65e7.appspot.com",
  messagingSenderId: "759781522308",
  appId: "1:759781522308:web:36bf409840c88be55bfbd1",
  measurementId: "G-TWJ88G81D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;

