import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAwHX090oA7ezZpWIjtbnNNOUDxH6hG5wc",
  authDomain: "fir-auth-1132-92d7f.firebaseapp.com",
  projectId: "fir-auth-1132-92d7f",
  storageBucket: "fir-auth-1132-92d7f.appspot.com",
  messagingSenderId: "426821078783",
  appId: "1:426821078783:web:8642a98f4ffd1538d186ca",
  measurementId: "G-88CEPPLKF5"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};