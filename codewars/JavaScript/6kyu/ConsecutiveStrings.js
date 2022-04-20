// Solution : Set Value Range between 0 and k; compare previous.length to current.length

function longestConsec(strarr, k) {
    let a;
    let res = '';
    if (k > 0 && k <= strarr.length) {
        for (let i = 0; i < strarr.length; i++) {
            a = strarr.slice(i, i + k).join('');
            if (res.length < a.length) {
                res = a;
            }
        }
    } else {
        return '';
    }
    return res;
}

console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 5));
