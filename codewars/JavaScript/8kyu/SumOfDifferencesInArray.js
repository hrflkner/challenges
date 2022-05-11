function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let res = 0;

    for (let i = 0; i < arr.length - 1; ++i) {
        res += arr[i] - arr[i + 1];
    }
    return res;
}

console.log(sumOfDifferences([10, 2, 1]));
