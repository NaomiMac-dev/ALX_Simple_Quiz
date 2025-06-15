// Defining the checkAnswer function
function checkAnswer () {

    // Function Body
const correctAnswer = "4";

// Getting the user's selected answer (radio button with name="quiz")
const selected = document.querySelector('input[name="quiz"]:checked');
const feedback = document.getElementById('feedback');

// Handling the case where no option is selected
if (!selected) {
    feedback.textContent = "Please select an answer!";
    return;
}

//  Retrieving the value of the selected radio button
const userAnswer = selected.value;

// Compare the User’s Answer with the Correct Answer
if(userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
} else {
    feedback.textContent = "That's incorrect. Try again!"
}
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
// Edited on 2025-06-15 to trigger checker
