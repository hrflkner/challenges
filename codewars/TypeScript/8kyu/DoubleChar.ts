// Solution 1st try : split, duplicate letter, join

export function doubleChar(str: string): string {
    return str
        .split('')
        .map((x) => x + x)
        .join('');
}

// Solution : Reduce String to duplicate letters

export function doubleCharTwo(str: string): string {
    return [...str].reduce(
        (accumulator, letter) => accumulator + letter + letter,
        '' // Initial Value Blank
    );
}
