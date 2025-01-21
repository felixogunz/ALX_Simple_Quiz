function checkAnswer() {
    const correctAnswer = "4"; 
  
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); 
  
    if (selectedOption) { 
      const userAnswer = selectedOption.value; 
  
      const feedbackElement = document.getElementById("feedback"); 
  
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = "Correct! Well done.";
      } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
      }
    } else {
      console.warn("No answer selected."); 
    }
  }
  

  const submitButton = document.getElementById("submit-answer");
  
  
  submitButton.addEventListener("click", checkAnswer); 
