// how to reverse a string

const grettings = "hello,how old are you?";

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(grettings);
console.log(reversed);