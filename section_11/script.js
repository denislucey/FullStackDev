random1 = Math.random()*6;
random1 = Math.floor(random1) + 1;
random2 = Math.random()*6;
random2 = Math.floor(random2) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice" + random1 + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice" + random2 + ".png")

if (random1 > random2) {
    newText = "Player 1 wins!"
}
else if (random2 > random1) {
    newText = "Player 2 wins!"
}
else {
    newText = "It's a tie"
}

document.querySelector("h1").textContent = newText