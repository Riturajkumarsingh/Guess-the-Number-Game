// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts += 1;

    // Get the element where the result will be displayed
    const resultElement = document.getElementById('result');

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
       
    } else if (userGuess > randomNumber) {
        resultElement.textContent = "Too high! Try again.";
        
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "Too low! Try again.";
       
    } else {
        resultElement.textContent = "Please enter a valid number!";
        
    }
}
