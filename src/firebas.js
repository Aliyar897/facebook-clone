
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlg0sRj-bBa5eOotFbXop1TxrR8Op1HKE",
    authDomain: "facebook-clone-app-a011a.firebaseapp.com",
    projectId: "facebook-clone-app-a011a",
    storageBucket: "facebook-clone-app-a011a.appspot.com",
    messagingSenderId: "452853510671",
    appId: "1:452853510671:web:0176005b3013acbd58697a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}