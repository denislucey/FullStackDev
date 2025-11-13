var buttonArray = ["red", "blue", "green", "yellow"];
var level = 0;
var gameStarted = false;
var gameOver = false;
var gamePattern = [];
var userPattern = [];

function nextNumber() {
  return Math.floor(Math.random() * 4);
}

function randomNextNumber() {
  var randomChosenColor = buttonArray[nextNumber()];
  gamePattern.push(randomChosenColor);
  buttonAnimation(randomChosenColor);
  level += 1;
  $("h1").text("Level " + level);
}

function buttonAnimation(color) {
  $("#" + color)
    .animate({ opacity: 0.5 })
    .animate({ opacity: 1 });
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

function checkAnswer(index) {
  if (userPattern[index] === gamePattern[index]) {
    if (index + 1 === gamePattern.length) {
      userPattern.length = 0;
      setTimeout(function () {
        randomNextNumber();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    },200);
    gameOver = true;
    $("h1").text("WRONG HAHAHAHHAHA (Press L to restart)")
  }
}

$(".btn").on("click", function () {
  userChosenColor = event.target.id;
  userPattern.push(userChosenColor);
  buttonAnimation(userChosenColor);
  checkAnswer(userPattern.length - 1);
});

$(document).on("keydown", function () {
  if (!gameStarted) {
    gameStarted = true;
    $("h1").text("Level " + level);
    randomNextNumber();
  }
  else {
    if (gameOver && event.key === "l") {
        restart();
    }
  }
});

function restart() {
    level = 0;
    gamePattern = [];
    userPattern = [];
    gameStarted = false;
    gameOver = false;
    $("h1").text("Press A Key to Start");
}
