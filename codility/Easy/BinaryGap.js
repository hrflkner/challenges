function solution(N) {
    // Get Binary and Strip Leading / Trailing Zeroes
    let binary = N.toString(2)
        .replace(/^0+/, '')
        .split('')
        .reverse()
        .join('')
        .replace(/^0+/, '');

    // Find Max Gap
    return Math.max(...binary.split('1').map((x) => x.length));
}

console.log(solution(4504));
