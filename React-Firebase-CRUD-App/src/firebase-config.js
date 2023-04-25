// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzwJ_alJrApAxcmv3ZUNk9HvJI-ZbmSuQ",
  authDomain: "react-crud-446a4.firebaseapp.com",
  projectId: "react-crud-446a4",
  storageBucket: "react-crud-446a4.appspot.com",
  messagingSenderId: "1052645227191",
  appId: "1:1052645227191:web:60eb56506da16912aaab32",
  measurementId: "G-W51PMQWEF4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);