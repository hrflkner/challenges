// Solution

function points(games) {
    let res = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            res += 3;
        } else if (games[i][0] == games[i][2]) {
            res += 1;
        }
    }
    return res;
}

console.log(points(['1:2', '3:0', '1:1']));
