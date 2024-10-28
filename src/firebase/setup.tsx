// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxzRvbRmqoEB5P6OlaK0g5YtsH-tccmE",
  authDomain: "chorki-clone.firebaseapp.com",
  projectId: "chorki-clone",
  storageBucket: "chorki-clone.appspot.com",
  messagingSenderId: "77796867465",
  appId: "1:77796867465:web:bcf73af4780cddd9bd7558",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
