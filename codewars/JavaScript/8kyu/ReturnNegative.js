// Solution 1 : Math.abs()
function makeNegativeOne(num) {
    return -Math.abs(num);
}

// Solution 2 : Ternary
function makeNegativeTwo(num) {
    return num > 0 ? -num : num;
}

console.log(makeNegativeOne(-9));
console.log(makeNegativeTwo(-9));
