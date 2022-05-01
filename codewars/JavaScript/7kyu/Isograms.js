// Solution 1 : Looping

function isIsogram(str) {
    let s = str.toLowerCase();
    for (let i = 0; i <= s.length; i++) {
        console.log(s[i]);
        for (let j = i; j <= s.length; j++) {
            if (i !== j && s[i] === s[j] && str !== '') {
                return false;
            }
        }
    }
    return true;
}

// Solution 2 : Using Sets and their length

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('Dermatoglyphics'));
