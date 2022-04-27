// Solution : .indexOf() returns -1 if index not found

function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let res = 0;
    for (let i = 0; i < alphabet.length; i++) {
        res = string.toLowerCase().indexOf(alphabet[i]);
        if (res == -1) {
            return false;
        }
    }
    return true;
}
