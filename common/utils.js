export function findById(productArray, id) {
    for (let i = 0; i < productArray.length; i++) {
        const item = productArray[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineItem(quantity, price) {
    const lineItemTotal = quantity * price;
    return roundCurrency(lineItemTotal);
}

function roundCurrency(lineItemTotal) {
    return Math.round(lineItemTotal * 100) / 100;
}

export function calcOrderTotal(cart, packs) {
    let totalOrder = 0;

    for (let j = 0; j < cart.length; j++) {
        const lineItem = cart[j];
        const product = findById(packs, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, product.price);
        totalOrder += lineTotal; 
    }
    return roundCurrency(totalOrder);
}