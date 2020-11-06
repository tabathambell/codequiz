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
var questionNumber = 0;
var correct = 0;
var quizStatus, quizQuestions, question, option, options, choice1, choice2, choice3, choice4;

function welcomePage() {
    var welcomeText = document.createElement("p");
    welcomeText.innerText = "Hello and welcome to this quiz! You have 60 seconds to complete the following 5 questions. Good luck and have fun!";
    var btnStart = document.createElement("button");
    btnStart.innerText = "Start Quiz!";
    content.appendChild(welcomeText);
    content.appendChild(btnStart);
};

//creating questions
var questions = [
{
    question: "Who was the killer in the 1980 slasher classic, Friday the 13th?",
    a: "Jason Vorhees",
    b: "Crazy Ralph",
    c: "Pamela Vorhees",
    d: "Jack Burrell",
    answer: "c"
},
{
    question: "Who played Regan MacNeil in the 1973 film, The Exorcist?",
    a: "Donna Mitchell",
    b: "Kitty Winn",
    c: "Ellen Burstyn",
    d: "Linda Blair",
    answer: "d"
},
{
    question: "We all know that John Carpenter's most famous film is Halloween, but what was his FIRST full-length feature film?",
    a: "Dark Star",
    b: "They Live",
    c: "Escape from New York",
    d: "The Thing",
    answer: "a"
},
{
    question: "How many years does it take for Pennywise, the Dancing Clown of IT fame take to return to feed on Derry, Maine's children?",
    a: "27",
    b: "30",
    c: "37",
    d: "10",
    answer: "a"
},
{
    question: "The Blair Witch Project released in 1999. What term did it modernize due to it's filming style?",
    a: "Shaky cam",
    b: "Splatter",
    c: "Found footage",
    d: "Grindhouse",
    answer: "c"
},

];

function get(x) {
    return document.getElementById(x);
}

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