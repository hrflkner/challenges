// Solution : Conditional

function howMuchILoveYou(nbPetals) {
    return [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ][nbPetals % 6 !== 0 ? (nbPetals % 6) - 1 : 5];
}

console.log(howMuchILoveYou(6));
