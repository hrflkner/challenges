// Solution 1 : First Attempt - Push sum of last three values

function tribonacci(signature, n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return signature.slice(0, 1);
    } else if (n === 2) {
        return signature.slice(0, 2);
    }
    let res = signature;
    for (let i = 3; i < n; i++) {
        res.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }
    return res;
}

console.log(tribonacci([1, 1, 1], 3));

// Solution 2 : More Concise

function tribonacci(signature, n) {
    for (var i = 0; i < n - 3; i++) {
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    }
    return signature.slice(0, n);
}
