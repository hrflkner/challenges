function barista(coffees) {
    coffees = coffees.sort((a, b) => a - b);
    let s = 0;
    for (let i = 0; i < coffees.length; i++) {
        s += coffees.slice(0, i + 1).reduce((a, b) => a + b, 0) + i * 2;
    }
    return s;
}
console.log(barista([4, 3, 2]));
