function order(words) {
    let w = words.split(' ');
    let res = [];
    let i = 0;
    while (i < w.length) {
        res.push(w.filter((x) => x.includes(`${i + 1}`)));
        i++;
    }
    return res.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
