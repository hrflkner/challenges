//Solution : Check if prev equals new. (Must use weak equals for str == array)

var uniqueInOrder = function (iterable) {
    let res = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != res.slice(-1)) {
            res.push(iterable[i]);
        }
    }
    return res;
};

console.log(uniqueInOrder('AAABBBCCCDDDAAAHHH'));
