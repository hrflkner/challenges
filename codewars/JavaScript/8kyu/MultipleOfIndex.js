// Solution : Number.isInteger()

function multipleOfIndex(array) {
    return array.filter((x, i) => Number.isInteger(x / i));
}
