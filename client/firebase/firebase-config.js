// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaIw2r3Ax3LPWohJxQF3PWDGBkm1TlXWs',
  authDomain: 'crypto-tracker-801a5.firebaseapp.com',
  projectId: 'crypto-tracker-801a5',
  storageBucket: 'crypto-tracker-801a5.appspot.com',
  messagingSenderId: '204406264943',
  appId: '1:204406264943:web:cad4004b2378d0f88de99a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
