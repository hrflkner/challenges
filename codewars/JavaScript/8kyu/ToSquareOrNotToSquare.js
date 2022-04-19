function squareOrSquareRoot(array) {
    return array.map((x) =>
        Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2
    );
}

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6, 7]));
