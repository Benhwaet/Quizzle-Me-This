// Fetching elements by ID and class to use them as variables
//Static elements
var containerEl = document.getElementById('container')
var timerEl = document.getElementById('timer')
var timeEl = document.getElementById('time')
var highscoreLink = document.getElementsByTagName('a')
highscoreLink.addEventListener('click', seeHighscores())
//Welcome page container
var welcomeContainer = document.getElementsByClassName('welcomeContainer')
var startBtn = document.getElementById('startBtn')
start.addEventListener('click', startQuiz())
//Quiz container
var quizContainer = document.getElementsByClassName('quizContainer')
var questions = document.getElementById('questions')
var topic = document.getElementById('topic')
var choices = document.getElementById('choices')
//Results and highscore form container
var scoreContainer = document.getElementsByClassName('scoreContainer')
var userScore = document.getElementById('score')
var nameLabel = document.getElementById('enterName')
var usernameInput = document.getElementById('username')
var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submitName())
//View and clear highscores container
var modal = document.getElementsByClassName('modal')
var highscores = document.getElementsByClassName('highscores')
var closeBtn = document.getElementsByClassName('btn-close')
closeBtn.addEventListener('click', closeScores())
var scoreList = document.getElementById('highscoreList')
var exitBtn = document.getElementsByClassName("btn btn-secondary")
exitBtn.addEventListener('click', exitScores())
var clearBtn = document.getElementsByClassName("btn btn-primary")
clearBtn.addEventListener('click', clearScores())

var secondsLeft = 30;

quizContainer.classList.add("hide");
scoreContainer.classList.add("hide");


function startQuiz() {
 document.write("whoa")
}
localStorage.setItem("", JSON.stringify(studentGrade));
renderMessage();
var timeInterval = setInterval(function () {
        
    if (timeLeft >= 1) {
          timeEl.textContent = timeLeft;
          timeLeft--;
        } else {
          timerEl.textContent = '*BOOM*';
          document.write("Batman is now dead.")
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);

function seeHighscores()
function submitName()
function closeScores()
function exitScores()
function clearScores()