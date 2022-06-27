// Solution : Looping and Template Literals

function multiTable(number) {
    let result = `1 * ${number} = ${number}`;
    for (let i = 2; i <= 10; i++) {
        result += `\n${i} * ${number} = ${number * i}`;
    }
    return result;
}
