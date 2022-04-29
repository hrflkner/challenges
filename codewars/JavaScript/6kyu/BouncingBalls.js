function bouncingBall(h, bounce, window) {
    if (bounce >= 1 || bounce <= 0 || h <= 0 || window > h) {
        return -1;
    } else {
        let current = h;
        let i = 0;
        while (current > window) {
            current *= bounce;
            i++;
        }
        // Passes window twice per bounce except during the first drop;
        return i * 2 - 1;
    }
}

console.log(bouncingBall(20, -0.5, 4));
