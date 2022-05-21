// Solution : Check '||' and rule out duplicates with '!(&&)'

function xor(a, b) {
    return (a || b) && !(a && b);
}

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(true, true));

// Solution : Shorter Version (I overthought this one)

function xor(a, b) {
    return a !== b;
}
