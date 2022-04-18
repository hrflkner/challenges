// Solution : for Loop & Template Literal

var countSheep = function (num) {
    res = '';
    for (let i = 1; i <= num; i++) {
        res += `${i} sheep...`;
    }
    return res;
};

console.log(countSheep(4));
