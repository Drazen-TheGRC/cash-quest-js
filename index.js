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
