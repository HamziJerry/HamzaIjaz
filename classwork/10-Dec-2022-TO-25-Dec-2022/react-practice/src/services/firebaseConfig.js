// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDEtf2HSMD72dnwDspie81EdtRAb_c-Q2Y",
  authDomain: "practice-project-b7e0e.firebaseapp.com",
  projectId: "practice-project-b7e0e",
  storageBucket: "practice-project-b7e0e.appspot.com",
  messagingSenderId: "6891865110",
  appId: "1:6891865110:web:46cd596e6f2a0ce776a137",
  measurementId: "G-8NG3SKWDH4",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = getAuth();
const google = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect ,google, signInWithPopup };
