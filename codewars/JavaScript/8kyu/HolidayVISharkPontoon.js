// Solution : Conditionals and Math

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let youTime = pontoonDistance / youSpeed;
    let sharkTime = sharkDistance / sharkSpeed;

    if (dolphin) {
        sharkTime *= 2;
    }
    if (sharkDistance < pontoonDistance) {
        return 'Shark Bait!';
    }
    return youTime < sharkTime ? 'Alive!' : 'Shark Bait!';
}

console.log(shark(12, 50, 4, 8, false));
