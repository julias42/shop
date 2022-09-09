"use strict";

const basketCountEl = document.querySelector('.circle_cart');
const basketTotalEl = document.querySelector('.grand_total');
const featuredEl = document.querySelector('.featured_items');


const basket = {};

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
}

function getTotalBasketCount() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count, 0);
}