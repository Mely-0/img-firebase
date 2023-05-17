// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8bitIFLOgPwSLBIR8qybW3lTgA2p0Xc",
  authDomain: "imagen-nube.firebaseapp.com",
  projectId: "imagen-nube",
  storageBucket: "imagen-nube.appspot.com",
  messagingSenderId: "951995908920",
  appId: "1:951995908920:web:94383f2c79be0e445177cd"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
export default appFireBase;
