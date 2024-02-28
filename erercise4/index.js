"use strict";

const player1Score = document.querySelector(".highScore1");
const player2Score = document.querySelector(".highScore2");
// const allScore = document.querySelector(".score");
const totalScorePlayer1 = document.querySelector(".totalScore1");
const totalScorePlayer2 = document.querySelector(".totalScore2");
const image = document.querySelector(".dice");
// const allTotalScore = document.querySelector(".total");

document.querySelector(".newGame").addEventListener("click", function () {
  document.querySelector(".dice").classList.add("hidden");
  document.querySelector(".right").classList.remove("change");
  document.querySelector(".left").classList.add("change");
  player1Score.textContent = "0";
  player2Score.textContent = "0";
  totalScorePlayer1.textContent = "0";
  totalScorePlayer2.textContent = "0";
  diceAdd = 0;
  defaultPlayer = 1;
});

let diceAdd = 0;
let defaultPlayer = 1;

document.querySelector(".roll").addEventListener("click", function () {
  let diceNumber = Number(Math.trunc(Math.random() * 6 + 1));
  console.log(diceNumber);

  if (diceNumber == 1 && defaultPlayer == 1) {
    document.querySelector(".left").classList.remove("change");
    document.querySelector(".right").classList.add("change");
    image.src = `dice-${diceNumber}.png`;
    image.classList.remove("hidden");
    player1Score.textContent = "0";
    totalScorePlayer1.textContent = "0";
    diceAdd = 0;
    defaultPlayer = 2;
  } else if (diceNumber == 1 && defaultPlayer == 2) {
    document.querySelector(".right").classList.remove("change");
    document.querySelector(".left").classList.add("change");
    image.src = `dice-${diceNumber}.png`;
    image.classList.remove("hidden");
    player2Score.textContent = "0";
    totalScorePlayer2.textContent = "0";
    diceAdd = 0;
    defaultPlayer = 1;
  } else {
    image.src = `dice-${diceNumber}.png`;
    image.classList.remove("hidden");
    diceAdd += diceNumber;
    if (diceAdd >= 20) {
      document.querySelector(".overlay").classList.remove("hide");
      document.querySelector(".winnerPlayer").textContent = defaultPlayer;
    }
    document.querySelector(`.totalScore${defaultPlayer}`).textContent = diceAdd;
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  document.querySelector(`.highScore${defaultPlayer}`).textContent = diceAdd;
  document.querySelector(`.totalScore${defaultPlayer}`).textContent = 0;
  if (defaultPlayer == 1) {
    defaultPlayer = 2;
    document.querySelector(".left").classList.remove("change");
    document.querySelector(".right").classList.add("change");
  } else {
    document.querySelector(".right").classList.remove("change");
    document.querySelector(".left").classList.add("change");
    defaultPlayer = 1;
  }
  diceAdd = 0;
});

document
  .querySelector(".overlay", ".popWindow")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("hide");
    image.classList.add("hidden");
    player1Score.textContent = "0";
    player2Score.textContent = "0";
    totalScorePlayer1.textContent = "0";
    totalScorePlayer2.textContent = "0";
    diceAdd = 0;
    defaultPlayer = 1;
  });
