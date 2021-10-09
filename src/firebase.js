import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-c1TJ_ZTXET6LuoWJlUT4fZUMuL3Y6HQ",
  authDomain: "instagram-clone-react-1bc9d.firebaseapp.com",
  projectId: "instagram-clone-react-1bc9d",
  storageBucket: "instagram-clone-react-1bc9d.appspot.com",
  messagingSenderId: "540805639207",
  appId: "1:540805639207:web:97090efc390f3f98367202",
  measurementId: "G-4KRJGH88KE"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };