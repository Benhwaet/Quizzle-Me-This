// Fetching elements by ID and class to use them as variables using JQuery

//Header and navigation: static elements that remain regardless of webpage state
const documentHtml = $(document);
const header = $("#header-container")
const imageContainer = $("#image-container")
const highscoreBtn = $("#highscoreBtn");
const timerEl = $("#timer");
let timeEl = $("#time");

const welcomeContainer = $("#welcomeContainer");
const startBtn = $("#startBtn");

//Quiz container
const quizContainer = $("#quizContainer");

//Results and user entry container
const scoreContainer = $("#scoreContainer")
const userScore = $("#score").text();
const nameLabel = $("#enterName");
const usernameInput = $("#usernameInput");
const submitBtn = $("#submit");

//Highscores container
const highscoreModal = $(".highscore-modal");
const highscores = $(".highscores");
const scoreList = $("#highscoreList");
const closeBtn = $("#btn-close");
const exitBtn = $("#btn-exit");
const clearBtn = $("#btn-clear");

//Global variables taken from Erik Hoversten Quiz-Game, lines 71-77
let timeLeft = 30;
let timerInterval;
let i = 0;
let currentQuizzle = i++;
console.log(currentQuizzle);
let secondsTimer = 30;

//Questions array
const quizzles = [
  {
    question: "What are the primitive data types in Javascript?",
    choices: {
      a: 'Boolean, String, Number, Undefined',
      b: 'String, Number, Undefined, Class',
      c: 'Boolean, Number, String, Defined',
      d: 'String, Boolean, Letter, Number'
    },
    answer: "a"
  }, {
    question: "What must be included before a variable's name to declare it as a variable?",
    choices: {
      a: "variable",
      b: "vari",
      c: "var",
      d: "vbl"
    },
    answer: "c"
  }, {
    question: "How does one fetch an element by id through DOM?",
    choices: {
      a: "document.getIdElement",
      b: "window.getElementId",
      c: "document.getElementById",
      d: "document.write.ElementbyId"
    },
    answer: "c"
  }, {
    question: "How does one create a new function called myFun?",
    choices: {
      a: "function = myFun()",
      b: "function(myFun())",
      c: "function: myFun()",
      d: "function myFun()"
    },
    answer: "d"
  }, {
    question: "What must be included before a variable's name to declare it as a variable?",
    choices: {
      a: "var", b: "let", c: "const", d: "any of the above"
    },
    answer: "d"
  }, {
    question: "How can one determine if there is strict equality between variables 'a' and 'b'?",
    choices: { a: "a == b", b: "a =!= b", c: "a === b", d: "a = b" },
    answer: "c"
  }, {
    question: "How can one identify if both expressions are true?",
    choices: {
      a: "expression1 || expression2",
      b: "expression1 =!= expression2",
      c: "expression1 && expression2",
      d: "expression1 == expression2"
    },
    answer: "c"
  }, {
    question: "How does one write an array?",
    choices: { a: "<'a', 'b', 'c', 'd'>", b: "['a', 'b', 'c', 'd']", c: "[a, b, c, d]", d: "(a, b, c, d)" },
    answer: "b"
  }, {
    question: "What is the first letter of the Caped Crusader's superhero name?",
    choices: { a: "A", b: "B", c: "C", d: "D" },
    answer: "B"
  }, {
    question: "How can one associate a response to an event, like a button being clicked?",
    choices: {
      a: "Button.listenForEvent('click', function())",
      b: "Button.EventListener('click', function())",
      c: "Button.addEventListener('click', function())",
      d: "Button.listenToEvent('click', function())"
    },
    answer: "c"
  }];

const quizNum = quizzles.length;
console.log(quizNum);
//hide unnecessary containers on page load
//using JQuery to avoid ridiculously long list of variables
$(function () {
  quizContainer.hide();
  nextBtn.hide();
  scoreContainer.hide();
  highscoreModal.hide();
});

imageContainer.on("click", function () {
  location.reload();
})

// function viewHighscores() {
//   welcomeContainer.hide();
//   quizContainer.hide();
//   nextBtn.hide();
//   scoreContainer.hide();
//   highscoreModal.show();
// };

//function taken from edX bootcamp class notes
function countdown() {
  let timeLeft = 2;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft >= 1) {
      // Set the `textContent` of `timeEl` to show the remaining seconds
      timeEl.text(timeLeft);  // --> jQuery Version
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 0) {
      // Once `timeLeft` gets to 0, set `timeEl` to an empty string
      timeEl.text("X_X");
      // found on stackoverflow by @adeneo 
      //<https://stackoverflow.com/questions/18708439/show-a-specific-image-on-click>
      const BOOM = `<img id="KABOOM" class="fullImage" src="assets/images/BOOM!!! (3).png" alt="BOOM! Batman is dead." onclick="location.reload()"/>`
        quizContainer.before(BOOM);
        quizContainer.hide();

      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

//Quiz container
const topic = $("#topicContainer");
const choices = $("#choicesContainer");
const quizButtons = $(".quiz-button")
const choiceA = $("#choice_a")
const choiceB = $("#choice_b")
const choiceC = $("#choice_c")
const choiceD = $("#choice_d")
const nextBtn = $("#nextBtn");

//hide unnecessary containers and show quiz, initiate countdown
startBtn.on("click", function () {
  welcomeContainer.hide();
  quizContainer.show();
  nextBtn.show();

  let i = 0;

  let quizBag =
    `<div id="quiz-box" class="container">
          <h3 id="topic-container" class="container">${quizzles[i].question}</h3>
          <ol id="choices-container" class="container list">
              <li><button id="choice_a" class="quiz-button" type="button">${quizzles[i].choices.a}</button></li>
              <li><button id="choice_b" class="quiz-button" type="button">${quizzles[i].choices.b}</button></li>
              <li><button id="choice_c" class="quiz-button" type="button">${quizzles[i].choices.c}</button></li>
              <li><button id="choice_d" class="quiz-button" type="button">${quizzles[i].choices.d}</button></li>
          </ol>
      </div>`

  countdown();

  quizContainer.prepend(quizBag);
  console.log(choiceA)

  //detect correct and incorrect answers, adjust score and time accordingly
 

  //goes to next question and presents username entry form and score at the end.
  nextBtn.on("click", function () {
    let quizBox = $("#quiz-box");

    quizBox.remove();
    i++;

    if (i < quizNum) {

      let quizBag =
        `<div id="quiz-box" class="container">
        <h3 id="topic-container" class="container">${quizzles[i].question}</h3>
        <ol id="choices-container" class="container list">
            <li><button id="choice_a" class="quiz-button" type="button">${quizzles[i].choices.a}</button></li>
            <li><button id="choice_b" class="quiz-button" type="button">${quizzles[i].choices.b}</button></li>
            <li><button id="choice_c" class="quiz-button" type="button">${quizzles[i].choices.c}</button></li>
            <li><button id="choice_d" class="quiz-button" type="button">${quizzles[i].choices.d}</button></li>
        </ol>
    </div>`

      quizContainer.prepend(quizBag);
    } else if (i = quizNum) {
      quizContainer.hide();
      timerEl.hide();
      scoreContainer.show();
    }

  })
});

const choicesContainer = $("#choices-container");

choicesContainer.on("click", function(event) {
  console.log("hey");
  console.log(event);
});

quizButtons.on("click", function(event){
  console.log("broooo!");
  console.log(event);
});


highscoreBtn.on("click", function() {
  welcomeContainer.hide();
  quizContainer.hide();
  nextBtn.hide();
  scoreContainer.hide();
  highscoreModal.show();
});

submitBtn.on("click", function (event) {
  event.preventDefault();

  let username = $("#usernameInput").val();
  console.log(username)
  localStorage.setItem(userScore, username)

  highscoreModal.show();
}
);
//close modal by clicking outside frame
$("body").on("click", function () {
  highscoreModal.modal("hide");
});

//close button event
closeBtn.on("click", function () {
  highscoreModal.modal("hide");
});

//exit button event
exitBtn.on("click", function () {
  highscoreModal.modal("hide");
});

//clear button event
clearBtn.on("click", function () {
  localStorage.removeItem("highscores");
});