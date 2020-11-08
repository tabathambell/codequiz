/*

-Have the user enter the page.
    -Welcome
-Guide the user through a series of questions
    -Questions
    -Transitions between questions
    -Specify which answers are the right answers.
    -Track user answers for each question.
-Have a timer counting down.
    -Display the time.
-Have the quiz end when the user gets through all the questions or the timer goes to zero
    -End page displaying the score.
    -Add initials and log the score.

*/

// The array of questions for the game.
var questions = [
    { question: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer: 1 },
    { question: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer: 1 },
    { question: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer: 1 },
    { question: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer: 1 },
    { question: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer: 1 },
  ];

  // Put DOM elements here
var timerEl = document.getElementById('countdown');
var goBtn = document.getElementById('go');
var introP = document.getElementById('intro');
var quizQEl = document.getElementById('quiz-questions');
var quizSEl = document.getElementById('quiz-status');

var a1Btn = document.getElementById('option1');
var a2Btn = document.getElementById('option2');
var a3Btn = document.getElementById('option3');
var a4Btn = document.getElementById('option4');
  
var score = 0;
var currentQuestion = -1;

// This is the run when the page loads.
function welcomePage() {
  quizQEl.setAttribute("style","display: none;");
};

// Function for moving to the next question, and handling the beginning and end-states of the quiz
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    quizQEl.setAttribute("style", "display: none;");
    introP.setAttribute("style", "display: default;");
    quizSEl.textContent = "THE JIG IS UP";
    introP.textContent = "You got " + score + " out of a possible " + questions.length +
      " questions correct! Refresh the page the play again!";
  } else {
    if (currentQuestion <= 0) {
      introP.setAttribute("style","display: none;");
      goBtn.setAttribute("style","display: none;");
      quizQEl.setAttribute("style","display: default;");
      countdown();
    }
  
    quizSEl.innerText = "Question " + (currentQuestion + 1) + ": " + questions[currentQuestion].question;
    a1Btn.innerText = questions[currentQuestion].option1;
    a2Btn.innerText = questions[currentQuestion].option2;
    a3Btn.innerText = questions[currentQuestion].option3;
    a4Btn.innerText = questions[currentQuestion].option4;
  }
}

// These four functions are bound to the answer buttons.
// They just call the generic checkAnswer () function.
function checkAnswer1() {
  checkAnswer(1);
}

function checkAnswer2() {
  checkAnswer(2);
}

function checkAnswer3() {
  checkAnswer(3);
}

function checkAnswer4() {
  checkAnswer(4);
}

// Checks whether the chosen answer is the correct one and updates the quiz
function checkAnswer(num) {
  var correct = questions[currentQuestion].answer;
  if (correct == num) {
    score++;
    alert("Correct! " + score + " correct out of " + (currentQuestion + 1) + "questions so far!");
  } else {
    alert("Incorrect! " + score + " correct out of " + (currentQuestion + 1) + " questions so far! ");
  }
nextQuestion();
}

// sets up the timer and updates it at 1 second intervals. Returns if it hits 0.
function countdown();

// welcome page call
welcomePage();

// Added onclicks for question advancement
goBtn.onclick = nextQuestion;
a1Btn.onclick = checkAnswer1;
a2Btn.onclick = checkAnswer2;
a3Btn.onclick = checkAnswer3;
a4Btn.onclick = checkAnswer4;