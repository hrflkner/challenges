// Solution : My Answer

function solution(string) {
    return string
        .split(/([A-Z][a-z]*)/g)
        .filter((x) => x !== '')
        .join(' ');
}

console.log(solution('stringTest'));

// Solution 2 : Using .replace()

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}
