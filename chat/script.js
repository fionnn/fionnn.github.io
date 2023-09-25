document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const socket = new WebSocket('wss://socket.mirna.cloud/lazyduck534/total:8080'); // Replace with your WebSocket server URL

    socket.onopen = (event) => {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
        // Handle incoming messages
        const message = event.data;
        appendMessage(message);
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    function sendMessage() {
        const text = messageInput.value;
        if (text) {
            socket.send(text);
            messageInput.value = '';
        }
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    } else {
        console.error("Element with ID 'sendButton' not found.");
    }

    function appendMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
    }
});
