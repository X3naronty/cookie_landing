"use strict";

document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({
    behavior: 'smooth'
  });
};

var links = document.querySelectorAll('.menu-item > a');

var _loop = function _loop(i) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({
      behavior: 'smooth'
    });
  };
};

for (var i = 0; i < links.length; i++) {
  _loop(i);
}

var buttons = document.querySelectorAll('.products-item .button');

for (var _i = 0; _i < buttons.length; _i++) {
  buttons[_i].onclick = function () {
    document.getElementById('order').scrollIntoView({
      behavior: 'smooth'
    });
  };
}

var prices = document.getElementsByClassName('products-item-price');

document.getElementById('change-currency').onclick = function (e) {
  var currentCurrency = e.target.innerText;
  var newCurrency = '$';
  var coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 90;
  } else if (currentCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 0.9;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (var _i2 = 0; _i2 < prices.length; _i2++) {
    prices[_i2].innerText = +(prices[_i2].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
  }
};

var product = document.getElementById('product');
var name = document.getElementById('name');
var phone = document.getElementById('phone');

document.getElementById('order-action').onclick = function () {
  var hasError = false;
  [product, name, phone].forEach(function (item) {
    if (!item.value) {
      item.style.borderColor = 'red';
      hasError = true;
    } else {
      item.style.borderColor = '';
    }
  });

  if (!hasError) {
    [product, name, phone].forEach(function (item) {
      item.value = '';
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
  }
};
//# sourceMappingURL=script.dev.js.map
