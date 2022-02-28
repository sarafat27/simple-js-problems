/* const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 15000 }
];
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice) */

// another way
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 5 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 15000, quantity: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    let productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
