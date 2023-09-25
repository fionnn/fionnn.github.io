document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');
    const refreshButton = document.getElementById('refresh');

    // Connect to the external WebSocket server
    const socket = new WebSocket('wss://ws.postman-echo.com/raw'); // Replace with your actual server URL

    socket.onopen = (event) => {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
        // Handle incoming messages
        const message = JSON.parse(event.data);
        appendMessage(message.text);
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Send a message
    sendButton.addEventListener('click', () => {
        const text = messageInput.value;
        if (text) {
            const message = { text };
            socket.send(JSON.stringify(message));
            messageInput.value = '';
            appendMessage(text);
        }
    });

    // Refresh button to get the latest messages
    refreshButton.addEventListener('click', () => {
        socket.send('refresh');
    });

    // Function to append a message to the chat container
    function appendMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
    }
});
