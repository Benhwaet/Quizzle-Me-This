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
        d: "document.writeElementbyId"},
      answer: "c"
  }, {
      question: "How does one create a new function?",
      choices: {
        a: "function = myFunction()", 
        b: "function(myFunction())", 
        c: "function: myFunction()", 
        d: "function myFunction()"},
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
        d:"expression1 == expression2"},
      answer: "c"
  }, {
      question:"How does one write an array?",
      choices:{a: "<'a', 'b', 'c', 'd'>", b: "['a', 'b', 'c', 'd'], c: [a, b, c, d]", d: "(a, b, c, d)"},
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
  }]

  //Global variables taken from Erik Hoversten Quiz-Game, lines 71-77
  var questionNum = quizzles.length;
  var timeLeft = 30;
  var gameScore;
  var gameStop = true;
  var timerInterval;
  var userAnswers = [];
  var currentQuestion = 0;

  var timeEl = $("#time")
//hide unnecessary containers on page load
//using JQuery to avoid ridiculously long list of variables
$(document).ready(function(){
  $("#highscoreModal").hide();
  $("#quizContainer").hide();
  $("#scoreContainer").hide();
});

function viewHighscores() {
  $("#highscoreModal").show();
}

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
      $("#time").text("*BOOM*");
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

function startQuiz() {
  $("#welcomeContainer").hide();
  $("#quizContainer").show();
  countdown();
  // timeInterval();
  console.log(quizzles[0].question)

// for (var i = 0; i < questions[currentquestion].choices.length; i++) {

$(".topic").text(quizzles[currentQuestion].question);
  
var choice_a = $("<button id='choice-a' class='choice'>").text(quizzles[currentQuestion].choices.a);
var choice_b = $("<button id='choice-b' class='choice'>").text(quizzles[currentQuestion].choices.b);
var choice_c = $("<button id='choice-c' class='choice'>").text(quizzles[currentQuestion].choices.c);
var choice_d = $("<button id='choice-d' class='choice'>").text(quizzles[currentQuestion].choices.d);

$(".list").append(choice_a, choice_b, choice_c, choice_d);


  // // testing condtion 
  // if(currentQuestion >= quizzles.length) {
  //   // end our timer
  //   // calulate user score
  //   // hide qiuz container
  //   // show highscores modal ... etc..
  // }
// }
};  

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