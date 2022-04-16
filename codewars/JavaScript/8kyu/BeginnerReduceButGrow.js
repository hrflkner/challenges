// Solution : .reduce((first, second) => first * second, 1)

function grow(x) {
    return x.reduce((x, y) => x * y, 1);
}

console.log(grow([1, 2, 3, 4]));
