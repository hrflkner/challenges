// Solution 1 : With String Conversion

var isPalindrome = function (x) {
    return x.toString() === x.toString().split('').reverse().join('');
};

// Solution 2 : Follow Up - Without String Conversion

var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let reversed = 0;
    let copy = x;
    while (copy > 0) {
        reversed = reversed * 10 + (copy % 10);
        copy = Math.floor(copy / 10);
    }
    return reversed === x;
};

isPalindrome(243);
