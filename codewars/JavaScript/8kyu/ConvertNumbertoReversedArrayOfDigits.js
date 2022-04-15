// Solution : int -> str -> split -> reverse -> int

function digitize(n) {
    return String(n)
        .split('')
        .reverse()
        .map((x) => parseInt(x));
}

console.log(digitize(239847));
