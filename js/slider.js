let first_slide = document.querySelector('.first-slide');
let first = document.querySelector('.first');
let second_slide = document.querySelector('.second-slide');
let second = document.querySelector('.second');
let third_slide = document.querySelector('.third-slide');
let third = document.querySelector('.third');

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
