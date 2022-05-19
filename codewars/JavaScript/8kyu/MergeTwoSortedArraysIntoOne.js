// Solution : Remove duplicates with Set, concat and sort values

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
