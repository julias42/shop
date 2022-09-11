"use strict";

const basketCountEl = document.querySelector('.circle_cart');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const featuredEl = document.querySelector('.featured_items');
const basketEl = document.querySelector('.basket');
const basketTotalEl = document.querySelector('.basketTotal');

document.querySelector('.header_link').nextElementSibling
    .addEventListener('mouseover', () => {
        basketEl.classList.toggle('hidden');
    });

document.querySelector('.header_link').nextElementSibling
    .addEventListener('mouseout', () => {
        basketEl.classList.toggle('hidden');
    });



const basket = {}

featuredEl.addEventListener('click', event => {
    if (!event.target.closest('.add_cart')) {
        return;
    }
    const items_card = event.target.closest('.items_card');
    const id = +items_card.dataset.id;
    const name = items_card.dataset.name;
    const price = +items_card.dataset.price;
    addToCart(id, name, price);
});

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
    basketCountEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getTotalBasketCount() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count, 0);
}
function getTotalBasketPrice() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return;
    }
    basketRowEl.querySelector('.productCount')
        .textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow')
        .textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
    const productRow = `
    <div class="basketRow" data-productId="${productId}">
        <div>${basket[productId].name}</div>
        <div>
            <span class="productCount">${basket[productId].count}</span> Шт.
        </div>
        <div>$${basket[productId].price}</div>
        <div>
            $<span class="productTotalRow">${(basket[productId]
            .price * basket[productId].count).toFixed(2)}</span>
        </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}