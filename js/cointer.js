/* // Находим элементы на странице 
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


// Остлеживаем клие на кнопку - 
btnMinus.addEventListener('click', function(){
  // Проверяем чтобы счётчик был больше 0
if (parseInt(counter.innerText) > 0 ) {
  // Изменяем текст в счётчике уменьшая его на 1 
  counter.innerText = --counter.innerText;
}
});


// Остлеживаем клие на кнопку + 
btnPlus.addEventListener('click', function(){
  counter.innerText = ++counter.innerText;
}); */