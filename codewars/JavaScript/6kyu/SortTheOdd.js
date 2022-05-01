// Solution : .sort() and .shift

function sortArray(array) {
    const oddsReversed = array.filter((x) => x % 2).sort((a, b) => a - b);
    // Use .sort instead of .reverse, but why? Node 16 allows .reverese
    return array.map((x) => (x % 2 ? oddsReversed.shift() : x));
}

console.log(sortArray([11, 5, 2, 8, 3, 4, 1]));
