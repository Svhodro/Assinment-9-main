// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFZLusD0H8bXvPj0UERes6i7fkZRg27uM",
  authDomain: "assingment-9-d956c.firebaseapp.com",
  projectId: "assingment-9-d956c",
  storageBucket: "assingment-9-d956c.appspot.com",
  messagingSenderId: "381876143550",
  appId: "1:381876143550:web:9ff27bbbf4132e8ea565ef",
  measurementId: "G-W1N5CDVTP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);