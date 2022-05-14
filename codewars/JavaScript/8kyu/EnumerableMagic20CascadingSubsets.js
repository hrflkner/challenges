// Solution : Messy - Definitely not an 8kyu

function eachCons(array, n) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        let subres = [];
        for (let j = 0; j < n; j++) {
            subres.push(array[i + j]);
        }
        if (subres[n - 1] !== undefined) {
            res.push(subres);
        }
    }
    return res;
}
console.log(eachCons([3, 5, 8, 13], 1));
