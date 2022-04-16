function compare(a, b) {
    // Split Strings Into Individual CSS Selectors (element, .class, #id)
    let delimiters = new RegExp(/(\s|[#[a-zA-Z0-9]+]|\.[a-zA-Z0-9]+)/g);
    let aSplit = a.split(delimiters);
    let bSplit = b.split(delimiters);

    // Init Specificity Counters
    let aRes = 0;
    let bRes = 0;

    for (let i = 0; i < aSplit.length; i++) {
        if (/[#]/.test(aSplit[i])) {
            aRes += 10000;
        } else if (/[\.]/.test(aSplit[i])) {
            aRes += 10;
        } else if (/[a-zA-z0-9]/.test(aSplit[i])) {
            aRes += 1;
        }
    }

    for (let i = 0; i < bSplit.length; i++) {
        if (/[#]/.test(bSplit[i])) {
            bRes += 10000;
        } else if (/[\.]/.test(bSplit[i])) {
            bRes += 10;
        } else if (/[a-zA-z0-9]/.test(bSplit[i])) {
            bRes += 1;
        }
    }

    if (aRes == bRes || bRes > aRes) {
        return b;
    } else if (aRes > bRes) {
        return a;
    }
}

console.log(
    compare(
        '#id',
        '.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.c10.c11.c12.c13.c14.c15.c16.c17.c18.c19.c20.c21.c22.c23.c24.c25.c26.c27.c28.c29.c30.c31.c32.c33.c34.c35.c36.c37.c38.c39.c40.c41.c42.c43.c44.c45.c46.c47.c48.c49.c50.c51.c52.c53.c54.c55.c56.c57.c58.c59.c60.c61.c62.c63.c64.c65.c66.c67.c68.c69.c70.c71.c72.c73.c74.c75.c76.c77.c78.c79.c80.c81.c82.c83.c84.c85.c86.c87.c88.c89.c90.c91.c92.c93.c94.c95.c96.c97.c98.c99.c100.c101.c102.c103.c104.c105.c106.c107.c108.c109.c110.c111.c112.c113.c114.c115.c116.c117.c118.c119.c120.c121.c122.c123.c124.c125.c126.c127.c128.c129.c130.c131.c132.c133.c134.c135.c136.c137.c138.c139.c140.c141.c142.c143.c144.c145.c146.c147.c148.c149.c150.c151.c152.c153.c154.c155.c156.c157.c158.c159.c160.c161.c162.c163.c164.c165.c166.c167.c168.c169.c170.c171.c172.c173.c174.c175.c176.c177.c178.c179.c180.c181.c182.c183.c184.c185.c186.c187.c188.c189.c190.c191.c192.c193.c194.c195.c196.c197.c198.c199.c200.c201.c202.c203.c204.c205.c206.c207.c208.c209.c210.c211.c212.c213.c214.c215.c216.c217.c218.c219.c220.c221.c222.c223.c224.c225.c226.c227.c228.c229.c230.c231.c232.c233.c234.c235.c236.c237.c238.c239.c240.c241.c242.c243.c244.c245.c246.c247.c248.c249.c250.c251.c252.c253.c254.c255.c256'
    )
);

console.log(
    compare(
        '.orange #first div div.purple.last #first .green span #home p.red #list .yellow .item div#menu .strong',
        'span.purple.c0cp4 table.yellow.yellow.blue div.purple.black b.first.red span.yellow.first.c28gyxm a ul.c4w7j ul ol.purple .white span.red u.center.cf8rze.orange.first p.green.red.white a.orange span#cat p#first #dog ul.yellow.first.center'
    )
);

console.log(compare('body p', 'div'));
