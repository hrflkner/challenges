// Solution : If sq is a perfect square, return (Math.sqrt(sq) + 1)**2

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1) ** 2;
    } else {
        return -1;
    }
}
