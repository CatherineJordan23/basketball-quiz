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