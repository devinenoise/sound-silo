

function renderLineItem(lineItem, packs) {
    const tr = document.createElement('tr');

    const productName = document.createElement('td');
    productName.className = 'title';
    productName.textContent = packs.name;
    tr.appendChild(productName);

    const quantity = document.createElement('td');
    quantity.textContent = lineItem.quantity;
    tr.appendChild(quantity);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${packs.price}`;
    tr.appendChild(priceCell);

    const lineItemTotal = document.createElement('td');
    lineItemTotal.className = 'line-item-total';
    const totalCost = lineItem.quantity * packs.price;
    lineItemTotal.textContent = `$${totalCost}`;
    tr.appendChild(lineItemTotal);

    return tr;
}

export default renderLineItem;