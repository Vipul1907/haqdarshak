import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwJEnCgWYz3PpOGAk4Coac302yjjGxUgI",
  authDomain: "haqdarshak-a3cdc.firebaseapp.com",
  projectId: "haqdarshak-a3cdc",
  storageBucket: "haqdarshak-a3cdc.appspot.com",
  messagingSenderId: "213355570946",
  appId: "1:213355570946:web:6be16ab107826b2e58441b",
  measurementId: "G-6G78LJ691Y",
};

const app = initializeApp(firebaseConfig);

export default app;
