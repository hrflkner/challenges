// Solution : Sort Max and Min, Sum with Gauss' Algorithm

function getSum(a, b) {
    let [min, max] = [a, b].sort((a, b) => a - b);
    return ((max - min + 1) * (max + min)) / 2;
}

console.log(getSum(0, 1));
