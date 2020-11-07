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
    { question: 'The sky is blue.', 
    option: 'here',
    option: 'here',
    option: 'here',
    option: 'here',
    answer: 'here' },
    { question: 'The sky is blue.', 
    option: 'here',
    option: 'here',
    option: 'here',
    option: 'here',
    answer: 'here' },
    { question: 'The sky is blue.', 
    option: 'here',
    option: 'here',
    option: 'here',
    option: 'here',
    answer: 'here' },
    { question: 'The sky is blue.', 
    option: 'here',
    option: 'here',
    option: 'here',
    option: 'here',
    answer: 'here' },
    { question: 'The sky is blue.', 
    option: 'here',
    option: 'here',
    option: 'here',
    option: 'here',
    answer: 'here' },
  ];
  // We start the game with a score of 0.
  var score = 0;
  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].question);
    // Compare answers !!!!!!!THIS IS THE ONE I NEED HELP WITH!!!!!
    if (
      
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
  // Show total at end
  alert('THE JIG IS UP. GAME OVER.');
  alert('You got ' + score + '/' + questions.length);

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

// welcome page call
welcomePage();