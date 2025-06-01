
import firebase from "firebase/compat/app";

//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCoJjhtnPBj2ZleizRWa3ggqTBNjLtzQ9Y",
  authDomain: "fir-80089.firebaseapp.com",
  projectId: "fir-80089",
  storageBucket: "fir-80089.firebasestorage.app",
  messagingSenderId: "897624731699",
  appId: "1:897624731699:web:416ed7def85c159bf27346",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
