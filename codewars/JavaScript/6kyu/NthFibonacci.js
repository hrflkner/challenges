//Solution 1 : Exceeds Call Stack

function nthFibo(n) {
    if (n == 0) return 0;
    else if (n == 1) {
        return 1;
    }
    return nthFibo(n - 1) + nthFibo(n - 2);
}

// Solution 2 : SOMETIMES Exceeds Call Stack
function nthFibo(n) {
    return n <= 2 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);
}
console.log(nthFibo(50));
