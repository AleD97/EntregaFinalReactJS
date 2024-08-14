// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWLl1ovkjxZz5yItiVXm7Tv-TmFY0xNd4",
  authDomain: "entrega-final-react-55890.firebaseapp.com",
  projectId: "entrega-final-react-55890",
  storageBucket: "entrega-final-react-55890.appspot.com",
  messagingSenderId: "285076127218",
  appId: "1:285076127218:web:745b6368b90a9edb857f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export db and auth for use in other parts of your app
export { db, auth };
