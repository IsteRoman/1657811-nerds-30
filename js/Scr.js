let first_slide = document.querySelector('.first-slide');
let first = document.querySelector('.first');
let second_slide = document.querySelector('.second-slide');
let second = document.querySelector('.second');
let third_slide = document.querySelector('.third-slide');
let third = document.querySelector('.third');
let open_form = document.querySelector('.button-open-form');
let modal_form = document.querySelector('.modal');
let close_form = document.querySelector('.close');

first.onclick = function() {
  first_slide.classList.remove('element-hidden');
  second_slide.classList.add('element-hidden');
  third_slide.classList.add('element-hidden');
  first.classList.add('slide-btn-active');
  second.classList.remove('slide-btn-active');
  third.classList.remove('slide-btn-active');
}

second.onclick = function() {
  first_slide.classList.add('element-hidden');
  second_slide.classList.remove('element-hidden');
  third_slide.classList.add('element-hidden');
  first.classList.remove('slide-btn-active');
  second.classList.add('slide-btn-active');
  third.classList.remove('slide-btn-active');
}

third.onclick = function() {
  first_slide.classList.add('element-hidden');
  second_slide.classList.add('element-hidden');
  third_slide.classList.remove('element-hidden');
  first.classList.remove('slide-btn-active');
  second.classList.remove('slide-btn-active');
  third.classList.add('slide-btn-active');
}

open_form.onclick = function() {
  modal_form.classList.remove('element-hidden');
}

close_form.onclick = function() {
  modal_form.classList.add('element-hidden');
}
