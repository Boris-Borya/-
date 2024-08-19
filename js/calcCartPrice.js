function calcCartPriceAndDelivery() {
  const cartItems = document.querySelector('.cart-wrapper');
  const priceElements = cartItems.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');
  
  // Общая стоимость товаров
  let totalPrice = 0;
  
  // Обходим все блоки с ценами в корзине 
  priceElements.forEach(function (item) {
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
    const price = parseInt(item.innerText.replace(/\D/g, ''));
    totalPrice += price * parseInt(amountEl.innerText);
  });

  // Отображаем цену на странице 
  totalPriceEl.innerText = totalPrice;

  // Логика отображения доставки
  if(totalPrice > 0) {  // исправлено с priceTotal на totalPrice
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  if(totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250';
  }
}




