// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOAogpIJ9MKaSz69f0NyqOa1l2uwzVebs",
  authDomain: "get-toys-car.firebaseapp.com",
  projectId: "get-toys-car",
  storageBucket: "get-toys-car.appspot.com",
  messagingSenderId: "14478557519",
  appId: "1:14478557519:web:6e073a4c9d19321cd7c53a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;