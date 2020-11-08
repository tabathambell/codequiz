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
    { question: 'Who is the killer in the 1980 slasher classic "Friday the 13th"?', 
    option1: 'Pamela Vorhees',
    option2: 'Alice Hardy',
    option3: 'Jason Vorhees',
    option4: 'Crazy Ralph',
    answer: 1 },
    { question: 'The Blair Witch Project came out in 1999. What modern film style did it establish?', 
    option1: 'Splatter film',
    option2: 'Gore fest',
    option3: 'Shaky cam',
    option4: 'Found footage',
    answer: 4 },
    { question: 'Boris Karloff is one of the original Universal Monsters actors of the black and white era of film. Which TWO Universal Monsters did he portray?', 
    option1: 'Dracula & Invisible Man',
    option2: 'Frankenstein & The Mummy',
    option3: 'The Wolfman & Frankenstein',
    option4: 'The Mummy & Dracula',
    answer: 2 },
    { question: 'Who wrote both the novel and the screenplay for the 1973 horror classic "The Exorcist"?', 
    option1: 'John Carpenter',
    option2: 'William Peter Blatty',
    option3: 'Stephen King',
    option4: 'Martin Scorcese',
    answer: 2 },
    { question: 'Skeet Ulrich and Neve Campbell are known for their roles as Billy Loomis and Sydney Prescott in "Scream", but what other 1996 film did they have supporting roles together in?', 
    option1: 'Ride With the Devil',
    option2: 'Deliverance Creek',
    option3: 'Wild Things',
    option4: 'The Craft',
    answer: 4 },
  ];

  // Put DOM elements here
var timerEl = document.getElementById('countdown');
var goBtn = document.getElementById('go');
var introP = document.getElementById('intro');
var quizQEl = document.getElementById('quiz-questions');
var quizSEl = document.getElementById('quiz-status');
var correctP = document.getElementById('correct');
var formEl = document.getElementById('form');
var subBtn = document.getElementById('submit');
var initialsEl = document.getElementById('initials');
var storedP = document.getElementById('stored');

var a1Btn = document.getElementById('option1');
var a2Btn = document.getElementById('option2');
var a3Btn = document.getElementById('option3');
var a4Btn = document.getElementById('option4');
  
var score = 0;
var currentQuestion = -1;

// This is the run when the page loads.
function welcomePage() {
  quizQEl.setAttribute("style","display: none;");
  formEl.setAttribute("style", "display: none;");
};

// Function for moving to the next question, and handling the beginning and end-states of the quiz
function nextQuestion() {
  currentQuestion++;
  goBtn.setAttribute("style", "display: none;");
  correctP.setAttribute("style", "display: none;");
  quizQEl.setAttribute("style","display: default;");
  goBtn.textContent = "Next Question";

  if (currentQuestion >= questions.length) {
    quizQEl.setAttribute("style", "display: none;");
    introP.setAttribute("style", "display: default;");
    quizSEl.textContent = "THE JIG IS UP. GAME OVER.";
    introP.textContent = "You got " + score + " out of a possible " + questions.length + 
      " questions correct. Refresh to try your luck again.";
    formEl.setAttribute("style", "display: default;");

  } else {
    if (currentQuestion <= 0) {
      introP.setAttribute("style","display: none;");
      countdown();
    }
    quizSEl.textContent = "Question " + (currentQuestion + 1) + ": " + questions[currentQuestion].question;
    a1Btn.textContent = questions[currentQuestion].option1;
    a2Btn.textContent = questions[currentQuestion].option2;
    a3Btn.textContent = questions[currentQuestion].option3;
    a4Btn.textContent = questions[currentQuestion].option4;
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
    correctP.textContent = "Correct! " + score + " correct out of " + (currentQuestion + 1) + " questions so far!";
  } else {
    correctP.textContent = "Incorrect! " + score + " correct out of " + (currentQuestion + 1) + " questions so far!";
  }
  quizQEl.setAttribute("style", "display: none;");
  correctP.setAttribute("style", "display: default;");
  goBtn.setAttribute("style", "display: default;");
}

// sets up the timer and updates it at 1 second intervals. Returns if it hits 0.
function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "Done";
      timerEl.setAttribute("style", "diplay: none;");
      quizQEl.setAttribute("style","display: none;");
      introP.setAttribute("style","display: default;");
      quizSEl.innerText = "THE JIG IS UP!";
      introP.innerText = "The jig is up! You got " + score + " out of a possible " + questions.length + 
        " questions correct! Refresh the page to play again!";
    } else if (currentQuestion >= questions.length) {
      clearInterval(timeInterval);
      timerEl.textContent = "Done";
      timerEl.setAttribute("style", "display: none;");
    } else {
      timerEl.textContent = timeLeft + " seconds left";
    }
    timeLeft -= 1;
  }, 1000);
}

// creating local storage for high scores
function storeInitials() {
  var initials = initialsEl.value;
  var storedScore = localStorage.getItem(initials);

  if (storedScore === null) {
    storedP.textContent = "You don't have an existing high score! We have stored this one!";
    localStorage.setItem(initials, score);
  } else {
    if (storedScore < score) {
      storedP.textContent = "New high score!";
      localStorage.setItem(initials, score);
    } else {
      storedP.textContent = "You didn't beat your last high score!";
    }
  }

  var keys = Object.keys(localStorage);
  var list = document.createElement("ul");
  formEl.appendChild(list);
  for (i = 0; i < keys.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = "<span class='scoreInit'>" + keys[i] + "</span>: <span class='scoreNum'>" + localStorage.getItem(keys[i]) + "</span>";
    list.appendChild(item);
  }
}

// welcome page call
welcomePage();

// Added onclicks for question advancement
goBtn.onclick = nextQuestion;
a1Btn.onclick = checkAnswer1;
a2Btn.onclick = checkAnswer2;
a3Btn.onclick = checkAnswer3;
a4Btn.onclick = checkAnswer4;

// 
subBtn.onclick = storeInitials;