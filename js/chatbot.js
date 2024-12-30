// script.js
const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatOutput = document.getElementById("chat-output");

// Simple responses
const responses = {
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing fine. How about you?",
  "your name": "I'm your friendly portfolio assistant chatbot!",
  "bye": "Goodbye! Have a great day!"
};

function handleUserMessage() {
  const userMessage = userInput.value.trim().toLowerCase();

  if (userMessage) {
    // Display user's message
    displayMessage(userMessage, "user");

    // Get bot's response
    const botResponse = responses[userMessage] || "Sorry, I don't understand that.";
    setTimeout(() => {
      displayMessage(botResponse, "bot");
    }, 500);

    // Clear input field
    userInput.value = "";
  }
}

function displayMessage(message, sender) {
  const messageElement = document.createElement("p");
  messageElement.className = sender;
  messageElement.textContent = message;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserMessage);

// Event listener for Enter key
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleUserMessage();
  }
});
