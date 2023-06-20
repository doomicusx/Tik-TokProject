// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdHr87gRdUIoJ7EQEyk_UbbrhIukYEgyM",
  authDomain: "tiktok---jornada-pedro.firebaseapp.com",
  projectId: "tiktok---jornada-pedro",
  storageBucket: "tiktok---jornada-pedro.appspot.com",
  messagingSenderId: "651510954224",
  appId: "1:651510954224:web:5c60de2b073390d229ea35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
