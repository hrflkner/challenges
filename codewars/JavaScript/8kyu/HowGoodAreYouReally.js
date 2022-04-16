// Solution : Use .reduce() to sum arr elements then find the mean

function betterThanAverage(classPoints, yourPoints) {
    return (
        yourPoints > classPoints.reduce((x, y) => x + y, 0) / classPoints.length
    );
}

console.log(betterThanAverage([99, 85, 80, 82], 94));
