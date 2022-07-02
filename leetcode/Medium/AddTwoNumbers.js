var addTwoNumbers = function (l1, l2) {
    let int1 = parseInt(
        l1
            .map((x) => x.toString())
            .reverse()
            .join('')
    );
    let int2 = parseInt(
        l2
            .map((x) => x.toString())
            .reverse()
            .join('')
    );

    let sol = (int1 + int2)
        .toString()
        .split('')
        .map((x) => parseInt(x))
        .reverse();

    return sol;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
