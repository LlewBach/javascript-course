console.log(document.querySelector('button').classList.contains('js-button'));

const gamingButton = document.querySelector('.js-gaming-button');
const musicButton = document.querySelector('.js-music-button');
const techButton = document.querySelector('.js-tech-button');

function toggle(button) {
  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  }

  if (!button.classList.contains('is-toggled')) {
    gamingButton.classList.remove('is-toggled');
    musicButton.classList.remove('is-toggled');
    techButton.classList.remove('is-toggled');
    button.classList.add('is-toggled');
  }
}


/*
Algorithm
1. switch off other/all buttons
2. toggle that button

*/