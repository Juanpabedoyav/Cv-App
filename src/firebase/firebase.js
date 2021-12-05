import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcrelI9Toqz2dKtAQ2VEoXyE874eiGR3g",
  authDomain: "cvapp-573c8.firebaseapp.com",
  projectId: "cvapp-573c8",
  storageBucket: "cvapp-573c8.appspot.com",
  messagingSenderId: "111352104092",
  appId: "1:111352104092:web:862651e5dab887bc3a5959",
  measurementId: "G-9VCHY30QVR",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };
