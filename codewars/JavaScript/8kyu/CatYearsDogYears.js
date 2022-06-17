// Solution : Ternary

var humanYearsCatYearsDogYears = function (humanYears) {
    return humanYears === 1
        ? [1, 15, 15]
        : humanYears === 2
        ? [humanYears, 24, 24]
        : [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)];
};
