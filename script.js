// Store quiz scores
var earlybirdScore = 0;  // store the early bird score
var nightowlScore = 0;   // store the night owl score
var questionCount = 0;   // store the number of answers clicked on

// Answer buttons
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Result output
var resultDisplay = document.getElementById("result");

// Event listeners
q1a1.addEventListener("click", selectEarlyBird);
q1a2.addEventListener("click", selectNightOwl);
q2a1.addEventListener("click", selectEarlyBird);
q2a2.addEventListener("click", selectNightOwl);
q3a1.addEventListener("click", selectEarlyBird);
q3a2.addEventListener("click", selectNightOwl);

// Functions
function selectEarlyBird() {
  earlybirdScore++;
  questionCount++;
  checkQuizCompletion();
}

function selectNightOwl() {
  nightowlScore++;
  questionCount++;
  checkQuizCompletion();
}

function checkQuizCompletion() {
  console.log("questionCount = " + questionCount + ", earlybirdScore = " + earlybirdScore + ", nightowlScore = " + nightowlScore);

  if (questionCount === 3) {
    showResult();
  }
}

function showResult() {
  if (earlybirdScore >= 2) {
    console.log("You are an Early Bird Person");
    resultDisplay.innerHTML = "You are an Early Bird Person!";
  } else if (nightowlScore >= 2) {
    console.log("You are a Night Owl Person");
    resultDisplay.innerHTML = "You are a Night Owl Person!";
  } else {
    console.log("It's a tie!");
    resultDisplay.innerHTML = "It's a tie!";
  }
}
