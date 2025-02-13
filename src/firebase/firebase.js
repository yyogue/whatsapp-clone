import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOop1KsiuuXiCuC6jgniKecbX-UgfJMM",
  authDomain: "whatsappclone-84ce3.firebaseapp.com",
  projectId: "whatsappclone-84ce3",
  storageBucket: "whatsappclone-84ce3.appspot.com", 
  messagingSenderId: "528488942268",
  appId: "1:528488942268:web:b75b54246c0b5ebfa2deb9",
  measurementId: "G-F10PFX8YZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

// Export `auth` and `provider`
export { auth, provider, db };
export default app;
