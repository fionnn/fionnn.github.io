document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('messages');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    
    // Initialize a WebSocket connection
    const socket = new WebSocket('wss://ws.postman-echo.com/raw'); // Replace with your WebSocket server URL
    
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

    // Define the sendMessage function
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

    sendButton.addEventListener('click', sendMessage);

    // Function to append a message to the chat container
    function appendMessage(name, text) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${name}:</strong> ${text}`;
        chatContainer.appendChild(messageDiv);
    }
});
