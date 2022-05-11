// Solution : .reduce

function billboard(name, price = 30) {
    return name.split('').reduce((x) => (x += price), 0);
}

console.log(billboard('Hunter Faulkner', 30));
