
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL: "https://vh-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/",
    apiKey: "AIzaSyD9b31Uhv_F-DXlXSNWmy3w8GFY9Iz-gRk",
    authDomain: "vh-slutprojekt.firebaseapp.com",
    projectId: "vh-slutprojekt",
    storageBucket: "vh-slutprojekt.appspot.com",
    messagingSenderId: "240829301083",
    appId: "1:240829301083:web:aa1ef4b6a0ae8650f05a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData() {
    set(ref(db, 'Belula'), {
        message: "Hejsan"
    });
};

writeUserData();

onValue(ref(db, 'Belula'), (snapshot) => {
    const data = snapshot.val();
    alert(data.message)
},
    {
        onlyOnce: true
    });

onValue(
    ref(db, '/'),
    (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey, childData);
        });
    },
    {
        onlyOnce: true,
    }
);

//nedanstående är exempel som visar hur man rederar, i detta fal raderas 'Belula: "Hejsan"'

remove(ref(db, 'Belula')).then(() => {
    console.log("belulaRemoved ")

});