// Fetching elements by ID and class to use them as variables using JQuery

//Navigation: static elements that remain regardless of webpage state
var document = $("#root");
var containerEl = $("#container");
var timerEl = $("#timer");
var timeEl = $("#time");
var highscoreLink = $("nav");
// highscoreLink.addEventListener("click", seeHighscores());

//Welcome page container
var welcomeContainer = $(".welcomeContainer");
var start = $("#startBtn");
$("#start").addEventListener("click", startQuiz());

//Quiz container
var quizContainer = $(".quizContainer");
var questions = $("#questions");
var topic = $("#topic");
var choices = $("#choices");
var questionsNum = questions.length;


//Results and highscore form container
var scoreContainer = $(".scoreContainer");
var userScore = $("#score");
var nameLabel = $("#enterName");
var usernameInput = $("#username");
var submitBtn = $("#submit");
submitBtn.addEventListener("click", submitName());

//View and clear highscores container
var modal = $(".modal");
var highscores = $(".highscores");
var scoreList = $("#highscoreList");
//close button event
var closeBtn = $(".btn-close");
closeBtn.addEventListener("click", closeScores());
//exit button event
var exitBtn = $(".btn btn-secondary");
exitBtn.addEventListener("click", exitScores());
//clear button event
var clearBtn = $(".btn btn-primary");
clearBtn.addEventListener("click", clearScores());
//
var secondsTimer = 30;


//Hide everything but static elements, welcome container, and footer when page initializes
$(document).ready(function(){
    quizContainer.hide();
    scoreContainer.hide();
  });

function startQuiz() {
    $(".welcomeContainer").hide();
  for (var i = 0; i < questions.length; i++) {
          

}
localStorage.setItem("userScore", JSON.stringify(userScore));

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
// function seeHighscores();
// function submitName();
// function closeScores();
// function exitScores();
// function clearScores();

