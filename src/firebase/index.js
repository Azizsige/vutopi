import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLj2I-49XADMWzS6LSrOPhQRnmAOlcKRA",
  authDomain: "vutopi.firebaseapp.com",
  projectId: "vutopi",
  storageBucket: "vutopi.appspot.com",
  messagingSenderId: "882980126610",
  appId: "1:882980126610:web:5740a3be60e7defe2e0b4b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  addDoc,
  signInWithEmailAndPassword,
  query,
  where,
  getDocs,
  collection,
};
