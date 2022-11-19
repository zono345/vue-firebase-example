// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCix7WVf7MozrQle7HlFI8JVWCJef8U-74",
  authDomain: "vue-firebase-example-5340b.firebaseapp.com",
  projectId: "vue-firebase-example-5340b",
  storageBucket: "vue-firebase-example-5340b.appspot.com",
  messagingSenderId: "91334272170",
  appId: "1:91334272170:web:5c24742679ab5f0876dcd3",
  measurementId: "G-RV3P7D8KKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Authentication
const auth = getAuth()

export default { analytics, db, auth };