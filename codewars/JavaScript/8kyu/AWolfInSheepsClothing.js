// Solution 1 : My First Solution

function warnTheSheep(queue) {
    queue.reverse();
    if (queue.indexOf('wolf') <= 0) {
        return 'Pls go away and stop eating my sheep';
    } else {
        return (
            'Oi! Sheep number ' +
            queue.indexOf('wolf') +
            '! You are about to be eaten by a wolf!'
        );
    }
}

console.log(
    warnTheSheep([
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'wolf',
        'sheep',
        'sheep',
    ])
);

// Solution 2 : Slightly Cleaner

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
