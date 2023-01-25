
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

// Hämtar användarens data
const username = prompt("Please tell us your name");

messages.read = true;
messages.write = true;

// Form
// lyssnar efter submit eventet på form elementet och anroper "postChat" funktionen
document.getElementById("message-form").addEventListener("submit", sendMessage);


// skicka meddelande till db
function sendMessage(e) {
    e.preventDefault();


    // hämtar värdena som ska submittas
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;


    // Rensar input boxen
    messageInput.value = "";


    //Auto scroll till botten
    document
        .getElementById("messages")
        .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


    // Skapar db collection och skickar in datan
    db.ref("messages/" + timestamp).set({
        username,
        message,
    });
};

// Visa meddelanden
// refererar till collection som gjordes tidigare
const fetchChat = db.ref("messages/");

//  Använder onChildAdded event listenern för att checka efter nya meddelanden
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<li><span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    const li = document.createElement("li");
    li.innerHTML = `<span>${messages.username}: </span>${messages.message}`;
    document.getElementById("messages").appendChild(li);
   
});  
