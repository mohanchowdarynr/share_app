import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBrlif6hNDH9eSbg0wrbPB5Ppps23VIxeU",
  authDomain: "twitter-clone-2ce05.firebaseapp.com",
  projectId: "twitter-clone-2ce05",
  storageBucket: "twitter-clone-2ce05.appspot.com",
  messagingSenderId: "178382907314",
  appId: "1:178382907314:web:8b18749be6c50b91a5a6ab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;
