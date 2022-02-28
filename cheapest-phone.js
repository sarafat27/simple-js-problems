const phones = [
    { name: 'samsung galaxy s5', price: 45000, camera: 10, storage: 32 },
    { name: 'iphone 12', price: 70000, camera: 15, storage: 128 },
    { name: 'mi redmi 3', price: 15000, camera: 12, storage: 32 },
    { name: 'Nokia n95', price: 8000, camera: 5, storage: 8 },
    { name: 'oppo A31', price: 12000, camera: 10, storage: 16 },
    { name: 'walton m21', price: 18000, camera: 10, storage: 16 },
];
// without function
/* let cheapest = phones[0];
for (const phone of phones) {
    //compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest); */

// with function
function getCheapestPhone(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
let chepestPhone = getCheapestPhone(phones);
console.log('cheapest phone is:', chepestPhone);