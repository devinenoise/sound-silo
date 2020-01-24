// import cart from '../data/cart.js';
import packs from '../data/packs.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';


const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('cart-total');
const orderButton = document.getElementById('order-button');
const resetButton = document.getElementById('reset-button');



const potentialCart = localStorage.getItem('Cart');
let cart;
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

const orderTotal = calcOrderTotal(cart, packs);
orderTotalCell.textContent = `$${orderTotal}`;

if (cart.length === 0) {
    orderButton.disabled = true;
}
else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('Cart');
        alert('Order placed: ' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}

resetButton.addEventListener('click', () => {
    localStorage.clear();

});

