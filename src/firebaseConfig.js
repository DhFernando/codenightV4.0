import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC5IOmoKsonp9opkv8jf-ar-hI3n1D3GBk",
    authDomain: "firevue-d20d2.firebaseapp.com",
    databaseURL: "https://firevue-d20d2.firebaseio.com",
    projectId: "firevue-d20d2",
    storageBucket: "firevue-d20d2.appspot.com",
    messagingSenderId: "683654645589",
    appId: "1:683654645589:web:f3da26f32e749c174291dc"
};
// Initialize Firebase 
export const fb = firebase.initializeApp(firebaseConfig);