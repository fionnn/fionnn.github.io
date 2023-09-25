document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('messages');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // Initialize a WebSocket connection (Replace 'wss://your-server-url.com' with your WebSocket server URL)
    const socket = new WebSocket('wss://ws.postman-echo.com/raw');

    socket.onopen = (event) => {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
        // Handle incoming messages
        const message = JSON.parse(event.data);
        appendMessage(message.name, message.text);
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Function to send a message via WebSocket
    function sendMessage() {
        const name = nameInput.value;
        const text = messageInput.value;
        if (text) {
            const message = { name, text };
            socket.send(JSON.stringify(message));
            messageInput.value = '';
            appendMessage(name, text);
        }
    }

    // Add event listener for the Send button
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    } else {
        console.error("Element with ID 'sendButton' not found.");
    }

    // Function to append a message to the chat container
    function appendMessage(name, text) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${name}:</strong> ${text}`;
        chatContainer.appendChild(messageDiv);
    }
});
