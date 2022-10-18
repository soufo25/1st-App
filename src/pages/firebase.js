import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaKFF9M8xZSDOajyr4kkIrvRzWfozvpSM",
  authDomain: "authentification-c9d75.firebaseapp.com",
  projectId: "authentification-c9d75",
  storageBucket: "authentification-c9d75.appspot.com",
  messagingSenderId: "320631632948",
  appId: "1:320631632948:web:114673e8b6eb7f10c38661",
  measurementId: "G-CLHDRDCVQZ"
}

const app = initializeApp(firebaseConfig);
export  const auth = getAuth();





