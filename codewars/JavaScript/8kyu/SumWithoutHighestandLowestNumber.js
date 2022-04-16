// Solution : If not null sum values between min and max else return 0

function sumArray(array) {
    return array
        ? array
              .sort((a, b) => a - b)
              .slice(1, -1)
              .reduce((x, y) => x + y, 0)
        : 0;
}

console.log(sumArray([6, 2, 1, 8, 10]));
