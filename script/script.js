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

var content = document.querySelector(".content");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start')

function welcomePage() {
    var welcomeText = document.createElement("p");
    welcomeText.innerText = "Hello and welcome to this quiz! You have 60 seconds to complete the following 5 questions. Good luck and have fun!";
    var btnStart = document.createElement("button");
    btnStart.innerText = "Start Quiz!";
    content.appendChild(welcomeText);
    content.appendChild(btnStart);
};

// The array of questions for the game.
var questions = [
    { question1: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer1: 'here' },
    { question2: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer2: 'here' },
    { question3: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer3: 'here' },
    { question4: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer4: 'here' },
    { question5: 'The sky is blue.', 
    option1: 'here',
    option2: 'here',
    option3: 'here',
    option4: 'here',
    answer5: 'here' },
  ];
  
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    
    var answer = confirm(questions[i].question);
    // Compare answers !!!!!!!THIS IS THE ONE I NEED HELP WITH!!!!!
    if (
      I DON'T KNOW WHAT I'M DOING
    ) {
      score++;
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
 
  alert('THE JIG IS UP. GAME OVER.');
  alert('You received ' + score + 'out of' + questions.length);
  return;

for (i = 0; i < questions.length; i++) {
    var head = document.createElement("h2");
    head.innerText = questions[i][0];
    content.appendChild(head);
    
    for(j = 0; j < questions[i].length; j++) {
        var element = document.createElement("p");
        element.innerText = questions[i][j];
        content.appendChild(element);
    }
}

function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function() {
    if(timeLeft <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Done";
      displayMessage();
    } else {
      timerEl.textContent = timeLeft + " seconds left";
    }
    timeLeft -= 1;
  }, 1000);
}

  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;
// welcome page call
welcomePage();
button.addEventListener("onMouseUp", function);