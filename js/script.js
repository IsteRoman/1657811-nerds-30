const sliders = document.querySelector('.sliders');
const first_slide = document.querySelector('.first-slide');
const first = document.querySelector('.first');
const second_slide = document.querySelector('.second-slide');
const second = document.querySelector('.second');
const third_slide = document.querySelector('.third-slide');
const third = document.querySelector('.third');
const open_form = document.querySelector('.button-open-form');
const modal_form = document.querySelector('.modal');
const close_form = document.querySelector('.close');

if (sliders) {
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
}

if (modal_form) {
  open_form.addEventListener('click', function() {
    modal_form.classList.remove('element-hidden');
  });

  close_form.addEventListener('click', function() {
    modal_form.classList.add('element-hidden');
  });
}
