// Fetching elements by ID and class to use them as variables using JQuery

//Header and navigation: static elements that remain regardless of webpage state
const header = $("#header-container") 
const highscoreLink = $("#highscoreLink");
//highscoreLink.addEventListener("click", viewHighscores());

//Welcome page container
const welcomeContainer = $(".welcomeContainer");
const startBtn = $("#startBtn");
// start.addEventListener("click", startQuiz());

//Quiz container
const quizContainer = $("#quizContainer");
const timerEl = $("#timer");
let timeEl = $("#time");
const topic = $("#topicContainer");
const choices = $("#choicesContainer");
const nextBtn = $("#nextBtn");
// nextBtn.addEventListener("click", nextQuest);

let questionsNum = quizContainer.questions.length;

//Results and highscore form container
const scoreContainer = $("#scoreContainer")
const userScore = $("#score");
const nameLabel = $("#enterName");
const usernameInput = $("#usernameInput");
const submitBtn = $("#submit");
//submitBtn.addEventListener("click", submitName());

//View and clear highscores container
const highscoreModal = $(".highscoreModal");
const highscores = $(".highscores");
const scoreList = $("#highscoreList");
//close button event
const closeBtn = $(".btn-close");
closeBtn.addEventListener("click", closeScores());
//exit button event
var exitBtn = $(".btn btn-secondary");
exitBtn.addEventListener("click", exitScores());
//clear button event
var clearBtn = $(".btn btn-primary");
clearBtn.addEventListener("click", clearScores());
//
//Global variables taken from Erik Hoversten Quiz-Game, lines 71-77
var timeLeft = 30;
var gameScore;
var gameStop = true;
var timerInterval;
var currentQuestion;


var secondsTimer = 30;

//Questions array
var quizzles = [
    {
      question: "What are the primitive data types in Javascript?",
      choices: {
        a: "Boolean, String, Number, Undefined", 
        b: "String, Number, Undefined, Class", 
        c: "Boolean, Number, String, Defined", 
        d: "String, Boolean, Letter, Number"},
      answer: "a" 
  },{
      question: "What must be included before a variable's name to declare it as a variable?",
      choices: {
        a: "variable", 
        b: "vari", 
        c: "var", 
        d: "vbl"},
      answer: "c"
  },{
      question: "How does one fetch an element by id through DOM?",
      choices: {
        a: "document.getIdElement", 
        b: "window.getElementId", 
        c: "document.getElementById", 
        d: "document.write.ElementbyId"},
      answer: "c"
  }, {
      question: "How does one create a new function called myFun?",
      choices: {
        a: "function = myFun()", 
        b: "function(myFun())", 
        c: "function: myFun()", 
        d: "function myFun()"},
      answer: "d"
  }, {
      question: "What must be included before a variable's name to declare it as a variable?",
      choices: {
        a:"var", b: "let", c: "const", d: "any of the above"},
      answer: "d"
  }, {
      question:"How can one determine if there is strict equality between variables 'a' and 'b'?",
      choices:{a: "a == b", b: "a =!= b", c: "a === b", d: "a = b"},
      answer: "c"
  }, {
      question:"How can one identify if both expressions are true?",
      choices:{
        a: "expression1 || expression2", 
        b: "expression1 =!= expression2", 
        c: "expression1 && expression2", 
        d: "expression1 == expression2"},
      answer: "c"
  }, {
      question:"How does one write an array?",
      choices:{a: "<'a', 'b', 'c', 'd'>", b: "['a', 'b', 'c', 'd']", c: "[a, b, c, d]", d: "(a, b, c, d)"},
      answer: "b"
  }, {
      question:"What is the first letter of the Caped Crusader's superhero name?",
      choices:{a: "a", b: "b", c: "c", d: "d"},
      answer: "b"
  }, {
      question:"How can one associate a response to an event, like a button being clicked?",
      choices:{
        a: "Button.listenForEvent('click', function())", 
        b: "Button.EventListener('click', function())", 
        c: "Button.addEventListener('click', function())", 
        d: "Button.listenToEvent('click', function())"},
      answer: "c"
  }];

  quizzles[0].choices.a = true;
  quizzles[1].choices.c = true;
  quizzles[2].choices.c = true;
  quizzles[3].choices.d = true;
  quizzles[4].choices.d = true;
  quizzles[5].choices.c = true;
  quizzles[6].choices.c = true;
  quizzles[7].choices.b = true;
  quizzles[8].choices.b = true;
  quizzles[9].choices.c = true;
 
//hide unnecessary containers on page load
//using JQuery to avoid ridiculously long list of variables
$(function() {
  quizContainer.hide();
  scoreContainer.hide();
  highscoreModal.hide();
});

// //function taken from edX bootcamp class notes
function countdown() {
//   timeLeft = 30;
  console.log("Timer Element: ", timeEl);
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft >= 1) {
      // Set the `textContent` of `timeEl` to show the remaining seconds
      //console.log("countdown: ", timeLeft);
      $("#time").text(timeLeft);  // --> jQuery Version
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 0) {
      // Once `timeLeft` gets to 0, set `timeEl` to an empty string
      $("#time").text("*BOOM* Batman is dead.");
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

//hide unnecessary containers and show quiz, initiate countdown
var startQuiz = function() {
  $("#welcomeContainer").hide();
  // $("#highscoreModal").hide();
  // $("#scoreContainer").hide();
  $("#quizContainer").show();
  countdown();
}

 var quizBag = 
 `<h2 id="timer" class="timer p-3">Tic-Toc: <span id="time"></span></h2>
  <h3 id-"topic-container" class="container">${quizzles[i].question}</h2>
  <ol id="choices-container" class="container">
      <li><button id="choices_a" type="button">"${quizzles[i].choices.a}"</button></li>
      <li><button id="choices_b" type="button">"${quizzles[i].choices.b}"</button></li>
      <li><button id="choices_c" type="button">"${quizzles[i].choices.c}"</button></li>
      <li><button id="choices_d" type="button">"${quizzles[i].choices.d}"</button></li>
  </ol>
console.log(quizBag)

quizContainer.insertAdjacentHtml(quizBag);
// forEach. or FOr loop (look up again)

// $(".topic").text(quizzles[currentQuestion].question);
//   console.log(quizzles[currenQuestion])
// var choice_a = $("<button id='choice-a' class='choice'>").text(quizzles[currentQuestion].choices.a);
// var choice_b = $("<button id='choice-b' class='choice'>").text(quizzles[currentQuestion].choices.b);
// var choice_c = $("<button id='choice-c' class='choice'>").text(quizzles[currentQuestion].choices.c);
// var choice_d = $("<button id='choice-d' class='choice'>").text(quizzles[currentQuestion].choices.d);

// $(".list").append(choice_a, choice_b, choice_c, choice_d);


  // // testing condtion 
  // if(currentQuestion >= quizzles.length) {
  //   // end our timer
  //   // calulate user score
  //   // hide qiuz container
  //   // show highscores modal ... etc..
  // }
// }
const viewHighscores = function() {
  $("#highscoreModal").show();
}

function nextQuest() {
  currentQuestion++;
}

function saveLocal() {
  localStorage.setItem("highscores", )
}

function closeModal() {
  $("#highscoreModal").hide();
}

$("body").on("click", closeModal);

function clearSaves() {
  localStorage.removeItem("highscores");
}