console.log("script.js connected!");

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Loop through each question block
questionBlocks.forEach(block => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      // Remove 'selected' from all buttons in this block
      buttons.forEach(btn => btn.classList.remove("selected"));

      // Add 'selected' to clicked button
      button.classList.add("selected");
    });
  });
});

// Button click
document.getElementById("result-btn").addEventListener("click", displayResult);

function displayResult() {
  let totalPoints = 0;

  // Get all selected answers
  const selectedAnswers = document.querySelectorAll(".answer-btn.selected");

  // Loop through selected answers
  selectedAnswers.forEach(answer => {
    totalPoints += Number(answer.dataset.points);
  });

  const resultContainer = document.getElementById("result-container");

  // Determine result
  if (totalPoints >= 7) {
    resultContainer.textContent = "🔥 You are a Scorer like Stephen Curry!";
  } else {
    resultContainer.textContent = "💪 You are a Team Player like LeBron James!";
  }
}