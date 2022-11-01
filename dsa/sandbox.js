// const sumNumbers = (numbers) => {
//     let sum = 0;
//     numbers.forEach( function(number) {
//         sum += number;
//     });
//     return sum;
// };
// console.log(sumNumbers([1, 5, 3, 5, 9, 7, 5]));

// FIBONACCI

// const fib = (n) => {
//     const numbers = [1, 1];
//     for (let i = 2; i < n + 1; i++) {
//         numbers.push(numbers[i - 2] + numbers[i - 1]);
//     };
//     return numbers[n];
// }
// console.log(fib(4));
// console.log(fib(5));

// PRIMALITY TEST

// const isPrime = (number) => {
//     for(let i = 2; i < Math.sqrt(number); i++) {
//         if(number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPrime(5));
// console.log(isPrime(9));

const isEven = (number) => {
    return number % 2 === 0;
};

// console.log(isEven(3));

const getMin = (numbers) => {
let currentMin = numbers[0];
    numbers.forEach(function (number) {
        if(number < currentMin) {
            currentMin = number;
        }
    });
    return currentMin; 
};

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));