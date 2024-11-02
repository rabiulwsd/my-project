// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo9pSWvOVDur29oSNYkrOd16HWcs0I3Ec",
  authDomain: "my-project-2ac8e.firebaseapp.com",
  projectId: "my-project-2ac8e",
  storageBucket: "my-project-2ac8e.firebasestorage.app",
  messagingSenderId: "665073424429",
  appId: "1:665073424429:web:2935c470ad2a1cb22440a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;