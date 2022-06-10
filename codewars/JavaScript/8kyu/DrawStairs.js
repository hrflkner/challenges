// Solution : Looping with String Addition

function drawStairs(n) {
    let res = 'I';
    for (let i = 2; i <= n; i++) {
        res += '\n' + ' '.repeat(i - 1) + 'I';
    }
    return res;
}

// Solution : Array Methods

const drawStairs = (n) =>
    [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
