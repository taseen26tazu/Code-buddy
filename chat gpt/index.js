// GETTING EXAMPLE VALUES IN INPUT 
/*
const Buttons = document.querySelectorAll(".example_query");
const ChatInput = document.querySelectorAll(".chat_input");
const SendButton = document.querySelectorAll(".send_btn");

for (const button of Buttons) {
    button.addEventListener("click", async (event) => {
        const targetElement = event.target;
        if(targetElement.classList.contains("example_query")){
            event.stoppropagation();
            const ButtonText = targetElement.textContent.trim();
            ChatInput,value = "";
            ChatInput.value = ButtonText;
        }
    })
}

SendButton.addEventListener("click", () => {
    ChatInput.value = "";
    alert("Message send");
});
*/
// GETTING EXAMPLE VALUES IN INPUT 
const Buttons = document.querySelectorAll(".example_query"); // Assuming multiple example query buttons
const ChatInput = document.querySelector(".chat_input"); // Assuming only one chat input field
const SendButton = document.querySelector(".send_btn"); // Assuming only one send button

// Loop through each example query button
/*
for (const button of Buttons) {
    button.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (targetElement.classList.contains("example_query")) {
            event.stopPropagation(); // Correct method name for stopping propagation
            const ButtonText = targetElement.textContent.trim();
            ChatInput.value = ButtonText; // Correct assignment using dot
        }
    });
}

// Add an event listener to the send button
SendButton.addEventListener("click", () => {
    ChatInput.value = ""; // Clear the input field
    alert("Message sent"); // Notify that the message is sent
});
*/
// Selecting elements
const Buttons = document.querySelectorAll(".example_query"); // For example query buttons (if any)
const ChatInput = document.querySelector(".chat_input"); // Chat input field
const SendButton = document.querySelector(".send_btn"); // Send button
const ChatHistory = document.querySelector(".chat_history"); // Chat history container

// Function to add a new query to the chat history
function addQueryToHistory(query) {
    // Create a new history item
    const historyItem = document.createElement("div");
    historyItem.classList.add("history");

    // Add the query text to the history item
    historyItem.textContent = query;

    // Append the new history item to the chat history container
    ChatHistory.appendChild(historyItem);
}

// Event listener for example query buttons (if any are used)
for (const button of Buttons) {
    button.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (targetElement.classList.contains("example_query")) {
            event.stopPropagation(); // Prevent event bubbling
            const ButtonText = targetElement.textContent.trim();
            ChatInput.value = ButtonText; // Set the input value to the button text
        }
    });
}

// Event listener for the send button
SendButton.addEventListener("click", () => {
    const query = ChatInput.value.trim(); // Get the trimmed input value
    if (query) { // Check if the input is not empty
        addQueryToHistory(query); // Add query to history
        ChatInput.value = ""; // Clear the input field
        alert("Message sent"); // Notify the user
    }
});
