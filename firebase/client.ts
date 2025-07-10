// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcEcPN7Ykygsc23o7bP1-2t_IAbUNEOpg",
  authDomain: "prepwise-509ed.firebaseapp.com",
  projectId: "prepwise-509ed",
  storageBucket: "prepwise-509ed.firebasestorage.app",
  messagingSenderId: "498914585042",
  appId: "1:498914585042:web:c7084381cc95c5928e800b",
  measurementId: "G-MBDCG960JZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)