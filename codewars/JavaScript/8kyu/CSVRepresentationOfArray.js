// Solution : Without .join

function toCsvText(array) {
    let res = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i === array.length - 1 && j === array[i].length - 1) {
                res += `${array[i][j]}`;
            } else if (j === array[i].length - 1) {
                res += `${array[i][j]}\n`;
            } else {
                res += `${array[i][j]},`;
            }
        }
    }
    return res;
}

// Solution : With .join('\n')

function toCsvText(array) {
    return array.join('\n');
}

console.log(
    toCsvText([
        [0, 1, 2, 3, 45],
        [10, 11, 12, 13, 14],
        [20, 21, 22, 23, 24],
        [30, 31, 32, 33, 34],
    ])
);
