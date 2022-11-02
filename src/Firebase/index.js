import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKXBMZ8hzlTD4jw58vXnMBXVj9V6nJLoo",
  authDomain: "project-world-cup.firebaseapp.com",
  projectId: "project-world-cup",
  storageBucket: "project-world-cup.appspot.com",
  messagingSenderId: "806892731454",
  appId: "1:806892731454:web:76182288432819abf1656f"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;
export { getFirestore };