let p = document.getElementById ('p');
let btn1 = document.getElementById ('btn1');
let btn2 = document.getElementById ('btn2');
let btn3 = document.getElementById ('btn3');
let btn4 = document.getElementById ('btn4');
let btn5 = document.getElementById ('btn5');
let btn6 = document.getElementById ('btn6');
let btn7 = document.getElementById ('btn7');
let reset = document.getElementById ('reset');
let clr = document.getElementById ('clr');
let num = document.getElementById ('num');
let result;
btn1.addEventListener ('click', function () {
  p.innerHTML = parseInt (p.innerHTML) + 1;
});
btn2.addEventListener ('click', function () {
  p.innerHTML = parseInt (p.innerHTML) - 1;
});
reset.addEventListener ('click', function () {
  p.innerHTML = 0;
});
clr.addEventListener ('click', function () {
  document.getElementById ('num').value = '';
});
btn3.addEventListener ('click', function () {
  if (num.value) {
    result = parseInt (num.value) + 2;
    document.getElementById ('num').value = result;
  } else {
    alert ('Enter a number to continue.!');
  }
});
btn4.addEventListener ('click', function () {
  if (num.value) {
    result = parseInt (num.value) - 2;
    document.getElementById ('num').value = result;
  } else {
    alert ('Enter a number to continue.!');
  }
});
btn5.addEventListener ('click', function () {
  if (num.value) {
    result = parseInt (num.value) * 2;
    document.getElementById ('num').value = result;
  } else {
    alert ('Enter a number to continue.!');
  }
});
btn6.addEventListener ('click', function () {
  if (num.value) {
    result = parseInt (num.value) / 2;
    document.getElementById ('num').value = result;
  } else {
    alert ('Enter a number to continue.!');
  }
});
btn7.addEventListener ('click', function () {
  if (num.value) {
    result = parseInt (num.value) % 2;
    document.getElementById ('num').value = result;
  } else {
    alert ('Enter a number to continue.!');
  }
});
