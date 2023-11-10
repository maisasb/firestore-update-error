import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
// } from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// export function signIn() {
//   const provider = new GoogleAuthProvider();

//   auth.useDeviceLanguage();

//   signInWithPopup(auth, provider).catch((error) => {
//     console.log(error);
//   });

//   onAuthStateChanged(auth, (user) => {
//     localStorage.setItem("test_user", JSON.stringify(user));
//   });
// }

// export async function signOut() {
//   await auth.signOut();
//   localStorage.removeItem("test_user");
// }
