import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG5wHT1Ehd7qStNTZ8W0zshRL4iYZCOxE",
  authDomain: "booksite-7e9e7.firebaseapp.com",
  projectId: "booksite-7e9e7",
  storageBucket: "booksite-7e9e7.firebasestorage.app",
  messagingSenderId: "670931286161",
  appId: "1:670931286161:web:445bafecef930a372a2730",
  measurementId: "G-DQ7RXZRW6J",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
