// Solution : Ternary, Array Methods, and Case Checking with .toLowerCase() and .toUpperCase()

String.prototype.toAlternatingCase = function () {
    return this.split('')
        .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
        .join('');
};
