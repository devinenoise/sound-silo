// import cart from '../data/cart.js';
import packs from '../data/packs.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';


const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('cart-total');
const orderButton = document.getElementById('place-order-button');

// reset localStorage button
//const resetButton = document.getElementById('reset-button');


const json = localStorage.getItem('Cart');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}


for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const checkInventory = findById(packs, lineItem.id);
    const dom = renderLineItem(lineItem, checkInventory);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, packs);
orderTotalCell.textContent = `$${orderTotal}`;

if (cart.length === 0) {
    orderButton.disabled = true;
    orderButton.textContent = 'Nothing In Cart';
}
else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('Cart');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../index.html';
    });
}

// resetButton.addEventListener('click', () => {
//     localStorage.clear();

// });

