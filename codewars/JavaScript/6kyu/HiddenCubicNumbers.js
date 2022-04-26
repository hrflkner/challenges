function isSumOfCubes(s) {
    // Get Integer Subarrays
    let l = s
        .replace(/[^\d]+/g, ' ')
        .trim()
        .split(' ');

    // Make Subarrays have length 3 or less
    let arr = [];
    for (let i = 0; i < l.length; i++) {
        if (l[i].length <= 3) {
            arr.push(l[i]);
        } else {
            for (let j = 0; j < l[i].length; j += 3) {
                arr.push(l[i].slice(j, j + 3));
            }
        }
    }

    // Check for "Hidden Cubic"
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        let x;
        x = arr[i]
            .split('')
            .map((x) => parseInt(x) ** 3)
            .reduce((a, b) => a + b, 0);
        if (x === parseInt(arr[i])) {
            if (arr[i].length == 1) {
                return `${arr[i]} ${arr[i]} Lucky`;
            } else if (arr[i].length == 2) {
                return `${arr[i][0]} ${arr[i][1]} ${
                    arr[i][0] + arr[i][1]
                } Lucky`;
            } else if (arr[i].length == 3) {
                return `${arr[i][0]} ${arr[i][1]} ${arr[i][2]} ${
                    arr[i][0] + arr[i][1] + arr[i][2]
                } Lucky`;
            }
        } else {
            return 'Unlucky';
        }
    }
    return res;
}

function isSumOfCubes(s) {
    let arr = [].concat(
        ...s
            .replace(/[^0-9]/gi, ' ')
            .replace(/\s+/gi, ' ')
            .trim().split` `.map((v) => {
            let arr = [];
            for (let i = 0; i < v.length; i += 3) {
                arr.push(v.slice(i, i + 3));
            }
            return arr;
        })
    );
    let final = arr
        .filter((v) => v * 1 === v.split``.reduce((a, b) => a + b * b * b, 0))
        .map((v) => v * 1);
    return final.length
        ? final.join` ` + ' ' + final.reduce((a, b) => a + b, 0) + ' ' + 'Lucky'
        : 'Unlucky';
}

console.log(
    isSumOfCubes('Lucky439Lucky0abc97Once upon153428abc48...370459...81xyz1')
);
