// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSRZyMwBlqq-5iHQ2lQdq5TwhUAew9f70",
    authDomain: "twirltrack-a628e.firebaseapp.com",
    projectId: "twirltrack-a628e",
    storageBucket: "twirltrack-a628e.appspot.com",
    messagingSenderId: "316986222980",
    appId: "1:316986222980:web:0b38442d36126745e415d1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
