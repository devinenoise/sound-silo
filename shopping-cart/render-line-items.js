function renderLineItems(lineItem, pack) {
    const tr = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = pack.name;
    tr.appendChild(name);

    const quantity = document.createElement('td');
    quantity.textContent = lineItem.quantity;
    tr.appendChild(quantity);

    const priceCell = document.createElement('td');
    priceCell.textContent = pack.price;
    tr.appendChild(priceCell);

    const lineItemTotal = document.createElement('td');
    lineItemTotal.className = 'line-item-total';
    const totalCost = lineItem.quantity * pack.price;
    lineItemTotal.textContent = totalCost;
    tr.appendChild(lineItemTotal);

    return tr;
}

export default renderLineItems;