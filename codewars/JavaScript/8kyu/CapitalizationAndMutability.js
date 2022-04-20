// Solution : str.replace(original, new)

function capitalizeWord(word) {
    return word.replace(word[0], word[0].toUpperCase());
}

console.log(capitalizeWord('hunter'));
