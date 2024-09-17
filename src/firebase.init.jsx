// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAssQeYtR2cm7lASdFhxC9Kic_fyMk_Ti8",
  authDomain: "a2s-travels.firebaseapp.com",
  projectId: "a2s-travels",
  storageBucket: "a2s-travels.appspot.com",
  messagingSenderId: "611649281847",
  appId: "1:611649281847:web:33627f49cbff1b9a3f44b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;