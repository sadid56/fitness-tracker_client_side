// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ntfuLqF07GNtHpFtjAhZZ4M6mUbLF7I",
  authDomain: "assignment-12-6812f.firebaseapp.com",
  projectId: "assignment-12-6812f",
  storageBucket: "assignment-12-6812f.appspot.com",
  messagingSenderId: "887459160354",
  appId: "1:887459160354:web:fd1c041293fdf9af8c057b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;