let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
} */

let isAutoPlaying = false;
let intervalId;

// const autoplay = () => {};

function autoplay() {
  if (!isAutoPlaying) {
     intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';
// Outcome
if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose';
  } else if (computerMove === 'paper') {
    result = 'You win';
  } else {
    result = 'You tie';
  }
  
} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win';
  } else if (computerMove === 'paper') {
    result = 'You tie';
  } else {
    result = 'You lose';
  }

} else {
  if (computerMove === 'rock') {
    result = 'You tie';
  } else if (computerMove === 'paper') {
    result = 'You lose';
  } else {
    result = 'You win';
  }
}
// Score
if (result === 'You win') {
  score.wins ++;
} else if (result === 'You lose') {
  score.losses ++;
} else if (result === 'You tie') {
  score.ties ++;
}
// Setting storage
localStorage.setItem('score', JSON.stringify(score));
// Setting result <p>
document.querySelector('.js-result').innerHTML = result;
// Setting moves <p>
document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
// Updating score <p>
updateScoreElement();

}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}

function pickComputerMove() {
const randomNumber = Math.random();  

let computerMove = '';

if (0 <= randomNumber && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else {
  computerMove = 'scissors';
}
return computerMove;
}