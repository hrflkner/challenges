// Solution : arr1.concat(arr2).reduce()

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0);
}
