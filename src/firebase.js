import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
//import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4p-VpEYCx7FGdXATGO2Z6flaLrIYo6Cw",
    authDomain: "messenger-clone-1d9c7.firebaseapp.com",
    projectId: "messenger-clone-1d9c7",
    storageBucket: "messenger-clone-1d9c7.appspot.com",
    messagingSenderId: "413484099339",
    appId: "1:413484099339:web:c9e4edf242f5469f87240e",
    measurementId: "G-XLZK4HW4VD" 
});

const db = firebaseApp.firestore();

export default db;

