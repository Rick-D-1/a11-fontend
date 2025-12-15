// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzp7P7o-JvwBdNJ_8up7L-AepAuo1R-n0",
    authDomain: "blood-bank-6eaa5.firebaseapp.com",
    projectId: "blood-bank-6eaa5",
    storageBucket: "blood-bank-6eaa5.firebasestorage.app",
    messagingSenderId: "675567139780",
    appId: "1:675567139780:web:66998a80b9cca8c5ad4291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;