// Solution : Change of Base Log Formula

function logs(x, a, b) {
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}

// Solution 2 : Simplified Log Equation

const logs = (x, a, b) => Math.log(a * b) / Math.log(x);
