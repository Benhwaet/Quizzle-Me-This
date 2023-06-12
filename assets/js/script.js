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

  var questionNum = quizzles.length;
//hide unnecessary containers on page load
//using JQuery to avoid ridiculously long list of variables
$(document).ready(function(){
  $(".modal").hide();
  $("#quizContainer").hide();
  $("#scoreContainer").hide();
  $("#highscoreModal").hide()
});

function viewHighscores() {
  $("#highscoreModal").show();
}

function startQuiz() {
  $("#welcomeContainer").hide();
  $("#quizContainer").show();

  for (var i = 0; i < questionNum; i++) {
          
  }

  var timeInterval = setInterval(function () {
      
    if (timeLeft >= 1) {
          timeEl.textContent = timeLeft;
          timeLeft--;
        } else {
          timerEl.textContent = "*BOOM*";
          document.write("Batman is now dead.")
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    }

function nextQuest() {
  questionNum++;
}

function saveLocal() {
  localStorage.setItem("highscores", )
}

function closeModal() {
  $("#highscoreModal").hide();
}

function clearSaves() {
  localStorage.removeItem("highscores");
}