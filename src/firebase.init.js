// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcnbTSMbhoUZfc3c72ILpG3hHzljA7W_E",
  authDomain: "hi-testing-a1ef1.firebaseapp.com",
  projectId: "hi-testing-a1ef1",
  storageBucket: "hi-testing-a1ef1.appspot.com",
  messagingSenderId: "497802125865",
  appId: "1:497802125865:web:a1a16cb4e73ef28dc43238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;