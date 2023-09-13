// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messages = document.getElementById("messages");
    const message = messageInput.value.trim();

    if (message !== "") {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messageInput.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}
