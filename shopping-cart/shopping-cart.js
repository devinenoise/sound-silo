import cart from '../data/cart.js';
import packs from '../data/packs.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('cart-total');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const checkInventory = findById(packs, lineItem.id);
    const display = renderLineItem(lineItem, checkInventory);

    tbody.appendChild(display);
}



const orderTotal = calcOrderTotal(cart, packs);
orderTotalCell.textContent = orderTotal;




