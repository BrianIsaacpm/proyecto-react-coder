// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaquZzNSJvv3TRpssPwLO-Yyft7oG4RPQ",
  authDomain: "coderhousereact-fa38b.firebaseapp.com",
  projectId: "coderhousereact-fa38b",
  storageBucket: "coderhousereact-fa38b.appspot.com",
  messagingSenderId: "421976378727",
  appId: "1:421976378727:web:92aea1edac68fda8b473c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)