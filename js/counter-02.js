// Добавляем прослушку на все окна
window.addEventListener('click', function (event){
  // Объявляем переменную для счётчика 
  let counter;

  // Проверяем клик строго по кнопкам Плюс либо Минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      // Находим обертку счётчика
      const counterWrapper = event.target.closest('.counter-wrapper');
      // Находим див с числом счётчика
      counter = counterWrapper.querySelector('[data-counter]');
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
  if (event.target.dataset.action === 'minus') {

      // Проверяем, чтобы счётчик был больше 1
      if (parseInt(counter.innerText) > 1) {
          // Изменяем текст в счётчике, уменьшая его на 1
          counter.innerText = --counter.innerText;
      } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
          // Проверка на товар, который находится в корзине
          console.log('IN CART!!');
          // Удаляем товар из корзины
          event.target.closest('.cart-item').remove();

          // Отображение статуса корзины Пустая / Полная 
          toggleCartStatus();

          calcCartPriceAndDelivery();
      }
  }

  // Проверяем клик на + или - внутри корзины
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    calcCartPriceAndDelivery();
  }
});
