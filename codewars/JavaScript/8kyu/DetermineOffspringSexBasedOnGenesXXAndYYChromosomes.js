function chromosomeCheck(sperm) {
    return (
        "Congratulations! You're going to have a " +
        (sperm.includes('Y') ? 'son.' : 'daughter.')
    );
}

console.log(chromosomeCheck('XY'));
