// const names = ['sunny', 'kabir', 'sakib', 'jewel', 'manik', 'sakib', 'makhon', 'abul', 'kabir', 'sunny', 'khokhon', 'jewel', 'emon', 'habul', 'makhon'];

/* function removeDuplicate(names) {
    const unique = [];
    // // for (i = 0; i < names.length; i++) {
    // //     element = names[i];
    // //     // console.log(element);
    // }  or,
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
 */

// with numbers
const numbers = [34, 67, 54, 78, 54, 89, 98, 78, 34, 54];
function removeDuplicate(numbers) {
    const unique = [];
    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

let uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);