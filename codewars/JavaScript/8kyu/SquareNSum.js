// Solution : Square with .map, Sum with .reduce

function squareSum(numbers) {
    return numbers.map((x) => x * x).reduce((a, b) => a + b, 0);
}

console.log(squareSum([1, 2, 2]));
