// Solution : Sum Cubes while < m;

function findNb(m) {
    let res = 0;
    let n = 0;
    while (res < m) {
        res += n ** 3;
        n++;
        console.log(n);
    }
    return res == m ? n - 1 : -1;
}

console.log(findNb(4183059834009));
