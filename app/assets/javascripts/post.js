'use strict';

const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const target3 = document.getElementById('target3');
const target4 = document.getElementById('target4');
const target5 = document.getElementById('target5');

target1.addEventListener('click', () => {
  target1.style.background = 'pink';
  target1.style.borderRadius = '50%';
  target1.style.transform = "rotate(360deg)";
});
target2.addEventListener('click', () => {
  target2.style.background = 'pink';
  target2.style.borderRadius = '50%';
  target2.style.transform = "rotate(360deg)";
  target2.style.border = "2px solid green";
});
target3.addEventListener('click', () => {
  target3.style.background = 'pink';
  target3.style.borderRadius = '50%';
  target3.style.transform = "rotate(360deg)";
  target3.style.borderStyle  = "dotted";
});
target4.addEventListener('click', () => {
  target4.style.background = 'pink';
  target4.style.borderRadius = '50%';
  target4.style.transform = "rotate(360deg)";
});
target5.addEventListener('click', () => {
  target5.style.background = 'pink';
  target5.style.borderRadius = '50%';
  target5.style.transform = "rotate(360deg)";
});