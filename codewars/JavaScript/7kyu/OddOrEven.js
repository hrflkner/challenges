// Solution : Sum and Modulo of 2

function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 == 0 ? 'even' : 'odd';
}
