// Fetching elements by ID and class to use them as variables using JQuery

//Navigation: static elements that remain regardless of webpage state
var containerEl = $('#container');
var timerEl = $('#timer');
var timeEl = $('#time');
var highscoreLink = $('#highscoreLink');
highscoreLink.addEventListener('click', viewHighscore());

//Welcome page container
var welcomeContainer = $('.welcomeContainer');
var start = $('#startBtn');
start.addEventListener('click', startQuiz());

//Quiz container
var quizContainer = $('.#quizContainer');
var questions = $('#questions');
var topic = $('#topic');
var choices = $('#choices');
var questionsNum = questions.length;


//Results and highscore form container
var scoreContainer = $('.scoreContainer');
var userScore = $('#score');
var nameLabel = $('#enterName');
var usernameInput = $('#username');
var submitBtn = $('#submit');
submitBtn.addEventListener('click', submitName());

//View and clear highscores container
var highscoreModal = $('.highscoreModal');
var highscores = $('.highscores');
var scoreList = $('#highscoreList');
//close button event
var closeBtn = $('.btn-close');
closeBtn.addEventListener('click', closeScores());
//exit button event
var exitBtn = $('.btn btn-secondary');
exitBtn.addEventListener('click', exitScores());
//clear button event
var clearBtn = $('.btn btn-primary');
clearBtn.addEventListener('click', clearScores());
//
//Global variables taken from Erik Hoversten Quiz-Game, lines 71-77
var questionNum = quizzles.length;
var timeLeft = 30;
var gameScore;
var gameStop = true;
var timerInterval;
var userAnswers = [];
var currentQuestion = i;

var timeEl = $("#time")
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
 