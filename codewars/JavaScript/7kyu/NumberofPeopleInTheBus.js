// Solution : Add first integer, Subtract second Integer

function number(busStops) {
    let res = 0;
    for (let i = 0; i < busStops.length; i++) {
        res += busStops[i][0] - busStops[i][1];
    }
    return res;
}

// Solution : One Liner using .reduce(callback(), initialValue)

const n = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(
    n([
        [10, 0],
        [5, 3],
    ])
);
