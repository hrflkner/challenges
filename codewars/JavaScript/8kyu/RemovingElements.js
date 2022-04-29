// Solution : Use idx given by .map() or .filter()

function removeEveryOther(arr) {
    return arr.filter((x, i) => i % 2 == 0);
}
