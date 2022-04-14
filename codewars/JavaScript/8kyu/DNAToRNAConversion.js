// Solution : .replaceAll() on Node Version 15 and up

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}

// Solution 2 : Regex with global - Better Browser Support

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('GCATGCAT'));
