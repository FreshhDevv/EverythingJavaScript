const sumNumbers = (numbers) => {
    let sum = 0;
    numbers.forEach( function(number) {
        sum += number;
    });
    return sum;
};
console.log(sumNumbers([1, 5, 3, 5, 5, 5,5]));

