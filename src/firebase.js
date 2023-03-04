import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFlpePZplkMRUXMJaQDBqDAsedKdSzo5w",
  authDomain: "ecs164linkup.firebaseapp.com",
  projectId: "ecs164linkup",
  storageBucket: "ecs164linkup.appspot.com",
  messagingSenderId: "311647483521",
  appId: "1:311647483521:web:fb24dbc72bcb24a4443f80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }