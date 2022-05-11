// Solution : Input Validation, and Conditionals

function countPositivesSumNegatives(input) {
    if (input === null || input[0] === undefined) {
        return [];
    }
    let evens = 0;
    let odds = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            evens++;
        } else if (input[i] < 0) {
            odds += input[i];
        }
    }
    return [evens, odds];
}

console.log(
    countPositivesSumNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ])
);
