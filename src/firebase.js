// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs-j7YRsEmY8gTuashGN3izsRqyhhQvHU",
  authDomain: "zafid-a6ed5.firebaseapp.com",
  projectId: "zafid-a6ed5",
  storageBucket: "zafid-a6ed5.appspot.com",
  messagingSenderId: "278372185790",
  appId: "1:278372185790:web:fba0fef6bca421dccfd0ef",
  measurementId: "G-JDZ1JPRNHD"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
