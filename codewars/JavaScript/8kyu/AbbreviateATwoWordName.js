// Solution : Split Name, Capitalize and return firts letter, join with "."

function abbrevName(name) {
    return name
        .split(' ')
        .map((x) => x[0].toUpperCase())
        .join('.');
}
