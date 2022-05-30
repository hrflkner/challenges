function howMuchWater(water, load, clothes) {
    let total = Math.round(water * 1.1 ** (clothes - load) * 100) / 100;
    if (clothes > 2 * load) {
        return 'Too much clothes';
    } else if (clothes < load) {
        return 'Not enough clothes';
    } else {
        return total;
    }
}

howMuchWater(10, 10, 21);
howMuchWater(10, 10, 2);
console.log(howMuchWater(10, 11, 20));
console.log(howMuchWater(50, 15, 29));
