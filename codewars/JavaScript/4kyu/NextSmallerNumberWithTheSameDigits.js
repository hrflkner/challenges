function nextSmaller(n) {
    arr = n
        .toString()
        .split('')
        .sort((a, b) => a - b);

    if (arr[0] === '0') {
        arr.shift();
        arr.push('0');
    }

    let solution = parseInt(arr.join(''));

    return solution !== n ? solution : -1;
}

console.log(nextSmaller(10234));
