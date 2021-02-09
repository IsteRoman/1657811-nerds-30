const first_slide = document.querySelector('.first-slide');
const first = document.querySelector('.first');
const second_slide = document.querySelector('.second-slide');
const second = document.querySelector('.second');
const third_slide = document.querySelector('.third-slide');
const third = document.querySelector('.third');

first.addEventListener('click', function() {
  first_slide.classList.remove('element-hidden');
  second_slide.classList.add('element-hidden');
  third_slide.classList.add('element-hidden');
  first.classList.add('slide-btn-active');
  second.classList.remove('slide-btn-active');
  third.classList.remove('slide-btn-active');
});

second.addEventListener('click', function() {
  first_slide.classList.add('element-hidden');
  second_slide.classList.remove('element-hidden');
  third_slide.classList.add('element-hidden');
  first.classList.remove('slide-btn-active');
  second.classList.add('slide-btn-active');
  third.classList.remove('slide-btn-active');
});

third.addEventListener('click', function() {
  first_slide.classList.add('element-hidden');
  second_slide.classList.add('element-hidden');
  third_slide.classList.remove('element-hidden');
  first.classList.remove('slide-btn-active');
  second.classList.remove('slide-btn-active');
  third.classList.add('slide-btn-active');
});
