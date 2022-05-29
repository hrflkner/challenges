// Solution : Fix Bugs

function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

console.log(buildString('chocolate', 'ice cream', 'cake'));
