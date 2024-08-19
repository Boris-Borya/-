const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function(event) {
    // Проверяем, что клик был совершен по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверяем, если уже есть такой набор в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            const cartItemHTML = `
              <div class="cart-item" data-id="${productInfo.id}">
                  <div class="cart-item__top">
                      <div class="cart-item__img">
                          <img src="${productInfo.imgSrc}" alt="">
                      </div>
                      <div class="cart-item__desc">
                          <div class="cart-item__title">${productInfo.title}</div>
                          <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                          <div class="cart-item__details">
                              <div class="items items--small counter-wrapper">
                                  <div class="items__control" data-action="minus">-</div>
                                  <div class="items__current" data-counter="">${productInfo.counter}</div>
                                  <div class="items__control" data-action="plus">+</div>
                              </div>
                              <div class="price">
                                  <div class="price__currency">${productInfo.price}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
              
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // Сбрасываем счётчик добавленного товара на "1" вместо "0"
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
});
