// Solution : Regex

function remove(string) {
    return string.replace(/!+$/g, '');
}
