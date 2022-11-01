let sum = 0;
// let numbers = [1, 5, 3, 5];
const sumNumbers = (numbers) => {
    numbers.forEach( function(number) {
        sum += number;
        console.log(sum);
    });
};

// console.log(sumNumbers([1, 4, 5]));
sumNumbers([1, 5, 3, 5]);