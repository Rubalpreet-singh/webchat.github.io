function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() !== "") {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        document.getElementById('messageInput').value = "";
    }
}
