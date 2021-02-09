const open_form = document.querySelector('.button-open-form');
const modal_form = document.querySelector('.modal');
const close_form = document.querySelector('.close');

open_form.addEventListener('click', function() {
  modal_form.classList.remove('element-hidden');
});

close_form.addEventListener('click', function() {
  modal_form.classList.add('element-hidden');
});
