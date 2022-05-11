// Solution : .substr and .length

function defineSuit(card) {
    if (card.substr(card.length - 1) === '♣') {
        return 'clubs';
    } else if (card.substr(card.length - 1) === '♦') {
        return 'diamonds';
    } else if (card.substr(card.length - 1) === '♥') {
        return 'hearts';
    } else if (card.substr(card.length - 1) === '♠') {
        return 'spades';
    }
}

console.log(defineSuit('Q♠'));
