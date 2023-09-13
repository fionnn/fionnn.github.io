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

        // Send the message to the server using WebSocket
        websocket.send(message);
    }
}

// Connect to the WebSocket server
const websocket = new WebSocket("wss://ws.postman-echo.com/raw");

// Handle incoming messages from the server
websocket.addEventListener("message", function (event) {
    const messageElement = document.createElement("div");
    messageElement.textContent = event.data;
    document.getElementById("messages").appendChild(messageElement);
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
});
