// Solution : Loop and .push()

function between(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) {
        res.push(i);
    }
    return res;
}

console.log(between(1, 5));
