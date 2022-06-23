'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else {
    if (score > 1) {
      if (guess === secreteNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = '20rem';
        if (Number(document.querySelector('.highscore').textContent) < score) {
          document.querySelector('.highscore').textContent = score;
        }
      } else if (guess > secreteNumber) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
      } else if (guess < secreteNumber) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
      }
    } else {
      score--;
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'rgb(233, 72, 72)';
      document.querySelector('.number').textContent = secreteNumber;
      document.querySelector('.number').style.width = '20rem';
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = 0;
});
