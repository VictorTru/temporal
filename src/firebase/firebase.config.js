// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBS0nagpKFMDKiIBA95dfEuHE5ujb4qRE",
  authDomain: "frontendcodigo20.firebaseapp.com",
  projectId: "frontendcodigo20",
  storageBucket: "frontendcodigo20.appspot.com",
  messagingSenderId: "549459918570",
  appId: "1:549459918570:web:0faa93c3e3c501d8d4e193",
  measurementId: "G-J6PPBEF48Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);