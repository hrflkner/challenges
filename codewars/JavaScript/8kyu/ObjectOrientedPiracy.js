// Solution : Add new method to existing object using obj.prototype.method

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20;
};

let titanic = new Ship(15, 55);

console.log(titanic.isWorthIt());
