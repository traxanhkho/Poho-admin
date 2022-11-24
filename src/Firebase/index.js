import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database" ; 

const firebaseConfig = {
  apiKey: "AIzaSyB5DzOb7pOYRgzlM_rjTrWL8AvSmQudD1M",
  authDomain: "poho-admin.firebaseapp.com",
  projectId: "poho-admin",
  storageBucket: "poho-admin.appspot.com",
  messagingSenderId: "255622387836",
  appId: "1:255622387836:web:8ec388d2dd6cadb2c6d1f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);
