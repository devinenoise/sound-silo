import packs from '../data/packs.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('cart-total');
const orderButton = document.getElementById('place-order-button');

let cart;
// checking for empty cart
const potentialCart = localStorage.getItem('Cart');
if (potentialCart) {
    cart = JSON.parse(potentialCart);
}
else {
    cart = [];
}


for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const checkInventory = findById(packs, lineItem.id);
    const display = renderLineItem(lineItem, checkInventory);

    tbody.appendChild(display);
}
// create the order total and update the table
const orderTotal = calcOrderTotal(cart, packs);
orderTotalCell.textContent = `$${orderTotal}`;

// if the cart is empty, disable the place order button
if (cart.length === 0) {
    orderButton.disabled = true;
    orderButton.textContent = 'Nothing In Cart';
}
// place the order, alert the user, reset cart, and return to home page
else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('Cart');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../index.html';
    });
}