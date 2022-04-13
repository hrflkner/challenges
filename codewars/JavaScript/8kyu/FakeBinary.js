// Solution1 : String Concatenation w if / else

function fakeBin(x) {
    let res = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            res += '0';
        } else if (x[i] >= 5) {
            res += '1';
        }
    }
    return res;
}

// Solution 2 : String Concatenation w Ternary

function fakeBin(x) {
    let res = '';
    for (let i = 0; i < x.length; i++) {
        x[i] < 5 ? (res += '0') : (res += '1');
    }
    return res;
}

// Solution 3 : One Liner with [...arr].map((num) => (ternary).join(''))

let fakeBinOneLiner = (x) => [...x].map((n) => (n < 5 ? 0 : 1)).join('');

console.log(fakeBinOneLiner('85217124'));
