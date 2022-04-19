// Solution : REGEX of a-m & REGEX.test(str)

function printerError(s) {
    let valid = new RegExp(/^[a-m_.]+$/);
    let res = 0;
    console.log(valid);
    for (let i = 0; i < s.length; i++) {
        if (valid.test(s[i])) {
            res += 0;
        } else {
            res += 1;
        }
    }
    return `${res}/${s.length}`;
}

console.log(printerError('aaabbbwwweee'));
