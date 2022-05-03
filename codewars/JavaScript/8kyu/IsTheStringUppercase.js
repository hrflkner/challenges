// Solution : .toUpperCase

String.prototype.isUpperCase = function () {
    return this == this.toUpperCase();
};

console.log('AbcDefG'.isUpperCase());
