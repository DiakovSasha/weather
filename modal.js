const backdropEl = document.querySelector('.backdrop');
const btnOpen = document.querySelector('[data-action="open"]');
const btnClose = document.querySelector('[data-action="close"]');

btnOpen.addEventListener('click', onBtnOpen);
btnClose.addEventListener('click', onBtnClose);
backdropEl.addEventListener('click', onBackdropClick);

function onBtnOpen() {
  window.addEventListener('keydown', onKeyEscClose);
  backdropEl.classList.remove('is-hidden');
}
function onBtnClose() {
  window.removeEventListener('keydown', onKeyEscClose);
  backdropEl.classList.add('is-hidden');
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onBtnClose();
  }
}
function onKeyEscClose(event) {
  console.log(event);
  if (event.code === 'Escape') {
    onBtnClose();
  }
}
