var romanToInt = function (s) {
    let res = 0;
    const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    for (let i = 0; i < s.length; i++) {
        res += romans[s[i]];
        if (romans[s[i]] < romans[s[i + 1]]) {
            res -= 2 * romans[s[i]];
        }
    }

    return res;
};

console.log(romanToInt('MCMXCIV'));

var romanToInt = function (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;

    if (s.length === 1) return romanMap[s];

    s.split('').forEach((romanChar, idx) => {
        const nextRomanChar = s[idx + 1] || 0;
        const currentRomanValue = romanMap[romanChar] || 0;

        const nextRomanValue = romanMap[nextRomanChar];

        if (nextRomanValue > currentRomanValue) {
            sum = sum - currentRomanValue;
        } else {
            sum += currentRomanValue;
        }
    });

    return sum;
};
