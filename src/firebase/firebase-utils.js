import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAQuZLowSsMUFTSxWu3Pv37afigjjbQ7TE",
  authDomain: "ecommerce-clothing-db-985ff.firebaseapp.com",
  projectId: "ecommerce-clothing-db-985ff",
  storageBucket: "ecommerce-clothing-db-985ff.appspot.com",
  messagingSenderId: "954542529733",
  appId: "1:954542529733:web:434c56de42674ea8bfe4ac",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
