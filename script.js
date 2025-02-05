// This function shows an alert when called
function showAlert() {
    alert("Welcome to your Study Dashboard!"); // Displays a message in an alert box
}

// This function changes the content of a specific element
function changeText() {
    document.getElementById("welcome-message").innerText = "Happy studying!"; // Changes text of an element with id "welcome-message"
}

// This code runs when the page is fully loaded
window.onload = function() {
    showAlert(); // Call showAlert function when the page loads

    // Create a button to change the welcome message
    const button = document.createElement("button"); // Creates a new button element
    button.innerText = "Change Welcome Message"; // Sets the button text
    button.onclick = changeText; // Assigns the changeText function to the button's click event
    document.body.appendChild(button); // Adds the button to the end of the body
};
// Array of motivational quotes
const quotes = [
    "Believe in yourself!",
    "You are capable of amazing things!",
    "Stay positive, work hard, make it happen.",
    "Your limitation—it's only your imagination.",
    "Dream it. Wish it. Do it.",
    "Success is not for the lazy.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction."
];

// Array of motivational quotes in English, Arabic, and French
const quotes = [
    "Believe in yourself!", // English
    "You are capable of amazing things!", // English
    "Stay positive, work hard, make it happen.", // English
    "أنت قادر على أشياء مذهلة!", // Arabic: You are capable of amazing things!
    "لا تتوقف عندما تشعر بالتعب. توقف عندما تنتهي.", // Arabic: Don't stop when you're tired. Stop when you're done.
    "Rêve-le. Souhaite-le. Fais-le.", // French: Dream it. Wish it. Do it.
    "Le succès n'est pas pour les paresseux.", // French: Success is not for the lazy.
    "محدداتك هي فقط خيالك." // Arabic: Your limitations are only your imagination.
];

// Function to display a random quote
function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const quoteDiv = document.createElement("div");
    quoteDiv.innerText = randomQuote; 
    quoteDiv.style.position = "fixed"; 
    quoteDiv.style.top = Math.random() * (window.innerHeight - 100) + "px"; 
    quoteDiv.style.left = Math.random() * (window.innerWidth - 200) + "px"; 
    quoteDiv.style.padding = "20px";
    quoteDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    quoteDiv.style.borderRadius = "10px";
    quoteDiv.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    quoteDiv.style.transition = "all 1s ease-in-out"; // Smooth transition for movement

    document.body.appendChild(quoteDiv); // Add the quote to the body

    // Move the quote every second
    let moveInterval = setInterval(() => {
        quoteDiv.style.top = Math.random() * (window.innerHeight - 100) + "px"; 
        quoteDiv.style.left = Math.random() * (window.innerWidth - 200) + "px"; 
    }, 1000); // Change position every second

    // After 5 seconds, remove the quote and stop moving
    setTimeout(() => {
        clearInterval(moveInterval); // Stop moving
        document.body.removeChild(quoteDiv); // Remove the quote from the DOM
    }, 5000); // Show quote for 5 seconds
}

// Function to handle displaying quotes at specified intervals
function startQuoteDisplay() {
    displayRandomQuote(); // Display the first quote immediately
    setInterval(() => {
        displayRandomQuote(); // Display subsequent quotes every 5 minutes
    }, 300000); // 5 minutes = 300000 milliseconds
}

// Start displaying quotes
startQuoteDisplay();

