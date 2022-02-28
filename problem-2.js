// how to detect prime number

function isPrime(number) {
    if (number < 1) {
        return "please give positive value";
    }
    else if (number == 1) {
        return "it is not a prime nor composite";
    }
    else if (number == 2) {
        return "it is a prime number";
    }
    else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return "it is not a prime number";
            }
        }
        return "it is a prime number";
    }
}
let myNumber = isPrime(13);
console.log(myNumber);
