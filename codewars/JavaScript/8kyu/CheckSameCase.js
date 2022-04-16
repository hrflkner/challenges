// Solution : Mix of REGEX and .toLowerCase() / .toUpperCase()

function sameCase(a, b) {
    // REGEX checks if input is non-alphabetic
    if (/[^a-zA-Z]/.test(a) || /[^a-zA-Z]/.test(b)) {
        return -1;
    } else if (
        (a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
        return 1;
    } else {
        return 0;
    }
}

console.log(sameCase('b', 'A'));
