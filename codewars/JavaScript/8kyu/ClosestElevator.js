// Solution : Conditional

function elevator(left, right, call) {
    let leftDist = Math.abs(call - left);
    let rightDist = Math.abs(call - right);
    return leftDist < rightDist ? 'left' : 'right';
}
