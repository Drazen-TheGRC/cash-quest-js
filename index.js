const buttonEngEl = document.getElementById('btn-eng');
const buttonCyrEl = document.getElementById('btn-cyr');
const buttonLatEl = document.getElementById('btn-lat');

buttonLatEl.classList.add('btn-active');

buttonLatEl.addEventListener('click', () => {
  buttonLatEl.classList.add('btn-active');
  buttonCyrEl.classList.remove('btn-active');
  buttonEngEl.classList.remove('btn-active');
});

buttonCyrEl.addEventListener('click', () => {
  buttonCyrEl.classList.add('btn-active');
  buttonLatEl.classList.remove('btn-active');
  buttonEngEl.classList.remove('btn-active');
});

buttonEngEl.addEventListener('click', () => {
  buttonEngEl.classList.add('btn-active');
  buttonLatEl.classList.remove('btn-active');
  buttonCyrEl.classList.remove('btn-active');
});

const cardOneEl = document.getElementById('card-one');
const cardOneFrontCardEL = document.querySelector(
  '#card-one .card-outer.front'
);
const cardOneBackCardEL = document.querySelector('#card-one .card-outer.back');

let isReveald = false;

cardOneEl.addEventListener('click', function () {
  if (!isReveald) {
    isReveald = true;

    cardOneFrontCardEL.style.transformOrigin = 'bottom left';
    cardOneFrontCardEL.style.transform = 'translateX(-140px) rotate(-5deg)';
    cardOneFrontCardEL.style.transition = 'transform 0.5s ease';

    cardOneBackCardEL.style.transformOrigin = 'bottom right';
    cardOneBackCardEL.style.transform = 'translateX(140px) rotate(5deg)';
    cardOneBackCardEL.style.transition = 'transform 0.5s ease';
  } else {
    isReveald = false;

    cardOneFrontCardEL.style.transform = 'translateX(0px) rotate(0deg)';
    cardOneFrontCardEL.style.transition = 'transform 0.5s ease';

    cardOneBackCardEL.style.transform = 'translateX(0px) rotate(0deg)';
    cardOneBackCardEL.style.transition = 'transform 0.5s ease';
  }
});
