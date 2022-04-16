// Solution : Removes all of the minimum values
function removeSmallest(numbers) {
    return numbers.filter((x) => x != Math.min(...numbers));
}

// Solution : Only Removes 1 of the min values!
function removeSmallest(numbers) {
    return numbers
        .sort(function (a, b) {
            return a - b;
        })
        .slice(1);
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
