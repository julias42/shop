"use strict";

const closeBtnEl = document.querySelector('.cart_but');
const cartEls = document.querySelectorAll('.cart');
const cartNoneEl = document.querySelector('.cart_none');

closeBtnEl.addEventListener('click', (event) => {
    if (!event.target.classList.contains('cart_but')) {
        return;
    }
    cartEls.forEach((cartEl) => {
        cartEl.style.display = "none";
        cartNoneEl.style.visibility = 'visible';
    });
});

