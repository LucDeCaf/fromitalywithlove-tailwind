import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyD_uVuPrNEHOKfgvaEeB5a4MF0GYyzP6MM",
  authDomain: "fromitalywithlove-de808.firebaseapp.com",
  projectId: "fromitalywithlove-de808",
  storageBucket: "fromitalywithlove-de808.appspot.com",
  messagingSenderId: "620171612304",
  appId: "1:620171612304:web:a621ab03d4f74c94604815",
};

export const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
