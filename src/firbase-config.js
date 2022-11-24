
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider}from "firebase/auth" 
import{getFirestore}from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB5oQAeJ1XZOd-g6DDiqIDo-ONb41mZQpE",
  authDomain: "whatstheyarn-a4efb.firebaseapp.com",
  projectId: "whatstheyarn-a4efb",
  storageBucket: "whatstheyarn-a4efb.appspot.com",
  messagingSenderId: "1072522186280",
  appId: "1:1072522186280:web:81561c13095cf66eb42f1d",
  measurementId: "G-G27JSN13TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();