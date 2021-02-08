let open_form = document.querySelector('.button-open-form');
let modal_form = document.querySelector('.modal');
let close_form = document.querySelector('.close');

open_form.onclick = function() {
  modal_form.classList.remove('element-hidden');
}

close_form.onclick = function() {
  modal_form.classList.add('element-hidden');
}
