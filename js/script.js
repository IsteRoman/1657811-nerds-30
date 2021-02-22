const sliders_block = document.querySelector('.sliders-block');
const sliders = document.querySelectorAll('.slider');
const slide_buttons = document.querySelectorAll('.slide-btn');
const first_slide = document.querySelector('.first-slide');
const first = document.querySelector('.first');
const second_slide = document.querySelector('.second-slide');
const second = document.querySelector('.second');
const third_slide = document.querySelector('.third-slide');
const third = document.querySelector('.third');
const open_form = document.querySelector('.button-open-form');
const modal_form = document.querySelector('.modal');
const login = modal_form.querySelector('[name=user_name]');
const close_form = document.querySelector('.close');

if (sliders_block) {
  const sliders_clear = function() {
    for (let i = 0; i<sliders.length; i++) {
      sliders[i].classList.add('element-hidden');
    }
  }
  const button_clear = function() {
    for (let i = 0; i<slide_buttons.length; i++) {
      slide_buttons[i].classList.remove('slide-btn-active');
    }
  }
  first.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliders_clear();
    button_clear();
    first_slide.classList.remove('element-hidden');
    first.classList.add('slide-btn-active');
  });
  second.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliders_clear();
    button_clear();
    second_slide.classList.remove('element-hidden');
    second.classList.add('slide-btn-active');
  });
  third.addEventListener('click', function(evt) {
    evt.preventDefault();
    sliders_clear();
    button_clear();
    third_slide.classList.remove('element-hidden');
    third.classList.add('slide-btn-active');
  });
}

if (modal_form) {
  open_form.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.remove('element-hidden');
    login.focus();
  });

  close_form.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.add('element-hidden');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_form.classList.add('element-hidden');
    }
  })
}
