
///Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9b31Uhv_F-DXlXSNWmy3w8GFY9Iz-gRk",
    authDomain: "vh-slutprojekt.firebaseapp.com",
    databaseURL: "https://vh-slutprojekt-default-rtdb.us-central1.firebasedatabase.app",
    projectId: "vh-slutprojekt",
    storageBucket: "vh-slutprojekt.appspot.com",
    messagingSenderId: "240829301083",
    appId: "1:240829301083:web:aa1ef4b6a0ae8650f05a7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();


