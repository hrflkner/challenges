// Solution : Sum with .reduce() - Flatten 2D-Array using .concat.apply([], arr)

function stairsIn20(s) {
    return s.concat.apply([], s).reduce((a, b) => a + b, 0) * 20;
}
