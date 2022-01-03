import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVSvXErkXrhLGp5ygWacOJlXeBTlbM-Z4",
    authDomain: "imc-calc-f3416.firebaseapp.com",
    databaseURL: "https://imc-calc-f3416-default-rtdb.firebaseio.com",
    projectId: "imc-calc-f3416",
    storageBucket: "imc-calc-f3416.appspot.com",
    messagingSenderId: "1045885088600",
    appId: "1:1045885088600:web:874c5776b68089e2f46b2d",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = getAuth();

const profileCollection = db.collection("profile");
const imcsCollection = db.collection("imcs");

export {db, auth, profileCollection, imcsCollection};
