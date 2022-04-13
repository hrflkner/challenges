// Solution : Int to arr, then sort, reverse, and rejoin as str. Finally, parseInt()

function descendingOrder(n) {
    return parseInt([...String(n)].map(Number).sort().reverse().join(''));
}
