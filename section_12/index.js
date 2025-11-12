function playSound(letter) {
  switch (letter) {
    case "w":
      audioPath = "./sounds/tom-1.mp3";
      break;
    case "a":
      audioPath = "./sounds/tom-2.mp3";
      break;
    case "s":
      audioPath = "./sounds/tom-3.mp3";
      break;
    case "d":
      audioPath = "./sounds/tom-4.mp3";
      break;
    case "j":
      audioPath = "./sounds/crash.mp3";
      break;
    case "k":
      audioPath = "./sounds/kick-bass.mp3";
      break;
    case "l":
      audioPath = "./sounds/snare.mp3";
      break;
    default:
      audioPath = "./sounds/snare.mp3";
  }
  var audio = new Audio(audioPath);
  audio.play();
}

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",function() {
    var letter = this.textContent;
    playSound(letter);
    secondAnimation(letter);
  });
}

function secondAnimation(key) {
    var clickedButton = document.querySelector("." + key);
    clickedButton.classList.toggle("pressed");

    setTimeout(function() {
        clickedButton.classList.toggle("pressed");
    },100);
}

document.addEventListener("keydown",function() {
    playSound(event.key);
    buttonAnimation(event.key);
})

document.addEventListener("keyup",function() {
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    var clickedButton = document.querySelector("." + currentKey);
    clickedButton.classList.toggle("pressed");
}
