// Import Firebase SDK (If you're using Firebase v9 or later)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jZx_ml9kAta_lUS7Naq73CWPWjlFYHk",
  authDomain: "test1-5e505.firebaseapp.com",
  databaseURL: "https://test1-5e505-default-rtdb.firebaseio.com",
  projectId: "test1-5e505",
  storageBucket: "test1-5e505.firebasestorage.app",
  messagingSenderId: "486006815381",
  appId: "1:486006815381:web:6bee548b70f872c944799c",
  measurementId: "G-57KDV01CD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// Function to send a message
function sendMessage() {
  const message = document.getElementById('messageInput').value;
  if (message.trim() !== "") {
    // Push the message to Firebase
    push(messagesRef, { username: "User", message: message, timestamp: Date.now() });

    // Display the message in the UI
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);

    // Clear the input field
    document.getElementById('messageInput').value = "";
  }
}

// Listen for new messages from Firebase and display them
onChildAdded(messagesRef, (snapshot) => {
  const data = snapshot.val();
  const messagesDiv = document.getElementById('messages');
  const newMessage = document.createElement('div');
  newMessage.textContent = `${data.username}: ${data.message}`;
  messagesDiv.appendChild(newMessage);
});
