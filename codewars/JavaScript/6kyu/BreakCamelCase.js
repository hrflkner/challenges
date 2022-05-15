// Solution

function solution(string) {
    return string
        .split(/([A-Z][a-z]*)/g)
        .filter((x) => x !== '')
        .join(' ');
}

console.log(solution('stringTest'));
