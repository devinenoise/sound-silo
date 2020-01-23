export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
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