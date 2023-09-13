// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKb4HYoIwqbgh8RkUF9HXtHAiRLaKcPQM",
  authDomain: "ces-telephone.firebaseapp.com",
  projectId: "ces-telephone",
  storageBucket: "ces-telephone.appspot.com",
  messagingSenderId: "309657851130",
  appId: "1:309657851130:web:fe727a580291ded4a9e543",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
