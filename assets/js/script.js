//Questions array

var quizzles = [
    {
      question: "What are the primitive data types in Javascript?",
      choices: ["Boolean, String, Number, Undefined", "String, Number, Undefined, Class", "Boolean, Number, String, Defined", "String, Boolean, Letter, Number"],
      answer: "Boolean, String, Number, Undefined"
  },{
      question: "What must be included before a variable's name to declare it as a variable?",
      choices: ["variable", "vari", "var", "vbl"],
      answer: "var"
  },{
      question: "How does one fetch an element by id through DOM?",
      choices: ["document.getIdElement", "window.getElementId", "document.getElementById", "document.writeElementbyId"],
      answer: "document.getElementById"
  }, {
      question: "How does one create a new function?",
      choices: ["function = myFunction()", "function(myFunction())", "function: myFunction()", "function myFunction()"],
      answer: "function myFunction()"
  }, {
      question: "What must be included before a variable's name to declare it as a variable?",
      choices: ["variable", "vari", "var", "vbl"],
      answer: "var"
  }, {
      question:"How can one determine if there is strict equality between variables 'a' and 'b'?",
      choices:["a == b", "a =!= b", "a === b", "a = b"],
      answer: "a === b"
  }, {
      question:"How can one identify if both expressions are true?",
      choices:["expression1 || expression2", "expression1 =!= expression2", "expression1 && expression2", "expression1 == expression2"],
      answer: "expression1 && expression2"
  }, {
      question:"How does one write an array?",
      choices:["<'a', 'b', 'c', 'd'>", "['a', 'b', 'c', 'd'], [a, b, c, d]", "(a, b, c, d)"],
      answer: "['a', 'b', 'c', 'd']"
  }, {
      question:"What is the first letter of the Caped Crusader's superhero name?",
      choices:["a", "b", "c", "d"],
      answer: "b"
  }, {
      question:"How can one associate a response to an event, like a button being clicked?",
      choices:["Button.listenForEvent('click', function())", "Button.EventListener('click', function())", "Button.addEventListener('click', function())", "Button.listenToEvent('click', function())" ],
      answer: "Button.addEventListener('click', function())"
  }]
//hide unnecessary containers on page load
//using JQuery to avoid ridiculously long list of variables
//but is ridiculously long list necessary?
$(document).ready(function(){
    // $(".quizContainer").hide();
    $(".scoreContainer").hide();
  });//works

var question0;
var welcomeContainer = $(".welcomeContainer");
var quizTopic = $("#topic");
var quizChoices = $("#choices");
var quizContainer = $("#quizContainer")

var startQuiz = function (event) {
    // event.preventDefault();
    welcomeContainer.hide();
    
    quizTopic.textContent = '';
    quizChoices.textContent = '';

    for (var i = 0; i <= 10; i++){
        // var questionTopic = document.createElement("li");
        // questionTopic.textContent = questions[i];
        quizChoices.text(quizzles.choices)

        // quizChoices.createElement("li")
        var listEl = $("topic").createElement("li")
        listEl.addClass("questionList").text(quizzles.question);
        $(".questionList").addClass("choicesList").text(quizzles.choices)
        
        quizTopic.appendChild(listEl)

        // var bulletEl = 
        
    }

}  
// $("#startBtn").addEventListener("submit", startQuiz());
// $("#startBtn").addEventListener("dblclick", startQuiz());
// $("#startBtn").on("submit", startQuiz);