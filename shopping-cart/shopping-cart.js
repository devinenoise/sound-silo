import { cart } from '../data/cart.js';
import { packs } from '../data/packs.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItems } from 'render-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalTable = document.getElementById('cart-total');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const pack = findById(packs, lineItem.id);
    const display = renderLineItems(lineItem, pack);

    tbody.appendChild(display);
}



const orderTotal = calcOrderTotal(cart, packs);
orderTotalTable.textContent = orderTotal;




// const cartTotal = document.createElement('td'); 
//     cartTotal.className = 'cart-total';
//     const totalOrder = calcOrderTotal(pack.quantity * );
//     cartTotal.textContent = totalOrder;
//     tr.appendChild(cartTotal);