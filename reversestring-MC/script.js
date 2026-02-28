// Function that handles input changes
// It updates the reversed text in real time
// and controls the visibility of the Reverse button
function handleInputChange() {

    // Get input value
    const inputText = document.getElementById("textInput").value;

    // Get DOM elements
    const reverseButton = document.getElementById("reverseButton");
    const resultDiv = document.getElementById("result");

    // Show button only if text length is greater than 3
    if (inputText.length > 3) {
        reverseButton.style.display = "inline-block";
    } else {
        reverseButton.style.display = "none";
    }

    // Reverse string in real time
    const reversedText = inputText.split("").reverse().join("");

    // Display result dynamically
    resultDiv.textContent = reversedText;
}


// Optional manual reverse function (kept for button click)
function reverseString() {

    const inputText = document.getElementById("textInput").value;
    const reversedText = inputText.split("").reverse().join("");

    document.getElementById("result").textContent = reversedText;
}


// Function that copies the reversed text to the clipboard
function copyToClipboard() {

    const resultText = document.getElementById("result").textContent;

    if (resultText !== "") {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch(err => {
                console.error("Error copying text: ", err);
            });
    }
}