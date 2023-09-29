"use strict";

let VarX = Math.trunc(Math.random() * 5) + 1;
let scoreX = 3;
console.log(VarX);

var audio1 = new Audio("applause.mp3");
var audio2 = new Audio("audio2.mp3");
var audio3 = new Audio("lose.mp3");
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.getElementById("Guess").value;
  const msg = document.querySelector(".message");
  const score = document.querySelector(".score");
  const show = document.querySelector(".guess");
  const hscore = document.querySelector(".hscore");
  const xt = document.querySelector("#xt");

  //iF VALUE not EXIST THEN:::

  if (!guess) {
    msg.textContent = `Invalid Number plezz Enter a valid number`;
  }

  //WINNING SCENERIO______________________
  else if (guess == VarX) {
    console.log(`You have entered ${guess} number`);
    msg.textContent = `YOU WON 🎉✨`;
    xt.textContent = "YO HO CONGRATULATION 👾";
    show.textContent = `${guess}`;
    const hscoreX = scoreX;
    hscore.textContent = `HIGH-SCORE = ${hscoreX}`;
    audio1.play();
  }
  //SMALL AND HIGH
  else if (scoreX > 0) {
    //small NUMBER__________________
    if (guess <= VarX) {
      msg.textContent = `TOO low 😒 Try Again😃`;
      scoreX = scoreX - 1;
      score.textContent = `SCORE = ${scoreX}`;
      audio2.play();
    }

    //Large number___________________________
    else if (guess >= VarX) {
      msg.textContent = `TOO High😓 Try Again 😃`;
      scoreX = scoreX - 1;
      score.textContent = `SCORE = ${scoreX}`;
      audio2.play();
    }
  }
  //Loosing Scenerio_________________-
  else if (scoreX == 0) {
    msg.textContent = ` GAME OVER🎇 YOU LOOSE 🧨😩`;
    audio3.play();
    xt.textContent = "BETTER LUCK NEXT TIME 👾";
  }
});
const again = document.querySelector(".again");
const soundA = new Audio("wrong.mp3");
again.addEventListener("click", function () {
  VarX = Math.trunc(Math.random() * 5) + 1;
  const guess = document.getElementById("Guess").value;
  const msg = document.querySelector(".message");
  const score = document.querySelector(".score");
  const show = document.querySelector(".guess");
  const hscore = document.querySelector(".hscore");
  soundA.play();

  scoreX = 3;
  //iF VALUE not EXIST THEN:::
  msg.textContent = "Guess the right number ?";
  score.textContent = `SCORE = ${scoreX}`;
  show.textContent = `?`;
  xt.textContent = "GUESS The Secret NUMBER?";
  audio1.pause();
});
