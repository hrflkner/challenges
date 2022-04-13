// Solution : Loop and arr.includes(string[idx].toLowerCase())

function vowelIndices(word) {
    let wordLower = word.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const vowelIndex = [];
    for (let i = 0; i < wordLower.length; i++) {
        if (vowels.includes(wordLower[i])) {
            vowelIndex.push(i + 1);
        }
    }
    return vowelIndex;
}

console.log(vowelIndices('apple'));
