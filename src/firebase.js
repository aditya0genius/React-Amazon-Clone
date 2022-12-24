import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDv7m8M3KabHrjvaPJMPXGZ6NKU3Y3Wki8",
  authDomain: "genius--clone.firebaseapp.com",
  projectId: "genius--clone",
  storageBucket: "genius--clone.appspot.com",
  messagingSenderId: "791627242132",
  appId: "1:791627242132:web:48556abc8b637b9e7fb281",
  measurementId: "G-SPNGJSK1RH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };