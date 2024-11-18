import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgiCeBlTFc0igrLSOySQhV8k7tkpnSRRA",
  authDomain: "local-community12.firebaseapp.com",
  databaseURL: "https://local-community12-default-rtdb.firebaseio.com",
  projectId: "local-community12",
  storageBucket: "local-community12.appspot.com",
  messagingSenderId: "156747922712",
  appId: "1:156747922712:web:1d8efb586d966b1cc8326d",
  measurementId: "G-C2EHKF2DES"
};

// Initialize Firebase only in browser environment
const app = typeof window !== 'undefined' ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();
export const db = app ? getFirestore(app) : null;

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});