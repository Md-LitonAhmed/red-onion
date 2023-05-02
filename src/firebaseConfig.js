// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwJ7Wfo1USFifhRAlaUqjIl_gh1jIyIwY",
  authDomain: "onion-auth-ba197.firebaseapp.com",
  projectId: "onion-auth-ba197",
  storageBucket: "onion-auth-ba197.appspot.com",
  messagingSenderId: "365643267098",
  appId: "1:365643267098:web:e5b33ce6ea5890faf065a3",
  measurementId: "G-VWTL7Q0Y76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
