// My Solution : cache counts in constructed object

function deleteNth(arr, n) {
    let uniques = [...new Set(arr)];

    let obj = {};
    for (let i = 0; i < uniques.length; i++) {
        obj[uniques[i].toString()] = 0;
    }

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i].toString()] < n) {
            res.push(arr[i]);
            obj[arr[i].toString()]++;
        }
    }
    return res;
}

console.log(deleteNth([5, 43, 2, 6, 6, 4, 7, 7], 1));
