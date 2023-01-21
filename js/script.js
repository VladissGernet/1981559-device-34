let subscribeForm = document.querySelector('.subscribe-form');
let subscribeField = document.querySelector('.subscribe-field');
let subscribeText = document.querySelector('.subscribe-text');

subscribeForm.onsubmit = function (evt) {
  evt.preventDefault();
  subscribeText.textContent = subscribeField.value + ' добавлен в список рассылки.'
}
