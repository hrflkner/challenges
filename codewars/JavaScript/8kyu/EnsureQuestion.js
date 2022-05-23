// Solution : Check if s.length-1 in string is a '?

function ensureQuestion(s) {
    return s[s.length - 1] == '?' ? s : s + '?';
}

console.log(ensureQuestion('No?'));
