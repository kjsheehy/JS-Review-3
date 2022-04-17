'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer = 0;
const scores = [0, 0];
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  let roll = Math.ceil(Math.random() * 6);
  console.log(roll);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${roll}.png`;

  if (roll !== 1) {
    // Add dice to current score
    currentScore += roll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    player;
  } else {
    //switch to next player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
