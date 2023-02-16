'use strict';

const btn = document.querySelector('#btn');
console.log(btn);

const range = document.querySelector('#range');
console.log(range);

const text = document.querySelector('#text');
console.log(text);

const square = document.querySelector('#square');
console.log(square);

const eBtn = document.querySelector('#e_btn');
console.log(e_btn);

const circle = document.querySelector('#circle');
console.log(circle);

const logger = function (event) {
  btn.onclick = function () {
  console.dir (square);
  square.style.backgroundColor = event.target.value;
  };
};

text.addEventListener('input', logger);

eBtn.style.display = "none";

const logger1 = function (event) {
    console.dir (event.target.value);
    console.dir (circle);
    let w = event.target.value + '%';
    let h = event.target.value +'%';

    circle.style.width = w;
    circle.style.height = h;
  };
range.addEventListener('input', logger1);
