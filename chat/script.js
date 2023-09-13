// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const nameInput = document.getElementById("nameInput"); // New name input field
    const messages = document.getElementById("messages");
    const message = messageInput.value.trim();
    const name = nameInput.value.trim(); // Get the sender's name

    if (message !== "" && name !== "") {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${name}: ${message}`; // Include sender's name
        messages.appendChild(messageElement);
        messageInput.value = "";
        messages.scrollTop = messages.scrollHeight;

        // Send the message to the server using WebSocket
        websocket.send(`${name}: ${message}`); // Include sender's name in the message
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
