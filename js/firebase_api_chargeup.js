// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDT0wNqbuoiZEmUbJc4MFA_5l4kedZbTjU",
    authDomain: "chargeup-4b09d.firebaseapp.com",
    projectId: "chargeup-4b09d",
    storageBucket: "chargeup-4b09d.appspot.com",
    messagingSenderId: "141565730249",
    appId: "1:141565730249:web:71710642aeb96d9ba11c18",
    measurementId: "G-9QGMK8QKGR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();