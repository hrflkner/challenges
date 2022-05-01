// Solution : .filter

function removeExclamationMarks(s) {
    return s
        .split('')
        .filter((x) => x !== '!')
        .join('');
}

console.log(removeExclamationMarks('!H!E!L!L!O!'));
