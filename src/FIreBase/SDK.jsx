// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kgvpj0oOsEJKd9azif1RywMx53M_zoc",
  authDomain: "simple-firebase-c03ca.firebaseapp.com",
  projectId: "simple-firebase-c03ca",
  storageBucket: "simple-firebase-c03ca.appspot.com",
  messagingSenderId: "742695514210",
  appId: "1:742695514210:web:eee8b3312df089e32e613b",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
