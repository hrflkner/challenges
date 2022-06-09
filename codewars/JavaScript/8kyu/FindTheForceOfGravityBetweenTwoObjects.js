// Solution : Very Annoying Kata

solution = (arr_val, arr_unit) => {
    let G = 6.67 * 10 ** -11;
    let m1 = arr_val[0];
    let m2 = arr_val[1];
    let r = arr_val[2];

    // Control Units of m1
    // Base Unit = Kilograms
    if (arr_unit[0] === 'g') {
        m1 *= 10 ** -3;
    } else if (arr_unit[0] === 'mg') {
        m1 *= 10 ** -6;
    } else if (arr_unit[0] === 'μg') {
        m1 *= 10 ** -9;
    } else if (arr_unit[0] === 'lb') {
        m1 *= 0.453592;
    }

    // Control Units of m2
    // Base Unit = Kilograms
    if (arr_unit[1] === 'g') {
        m2 *= 10 ** -3;
    } else if (arr_unit[1] === 'mg') {
        m2 *= 10 ** -6;
    } else if (arr_unit[1] === 'μg') {
        m2 *= 10 ** -9;
    } else if (arr_unit[1] === 'lb') {
        m2 *= 0.453592;
    }

    // Control Units of r
    // Base Unit = meters
    if (arr_unit[2] === 'cm') {
        r *= 10 ** -2;
    } else if (arr_unit[2] === 'mm') {
        r *= 10 ** -3;
    } else if (arr_unit[2] === 'μm') {
        r *= 10 ** -6;
    } else if (arr_unit[2] === 'ft') {
        r *= 0.3048;
    }

    return (G * m1 * m2) / (r * r);
};
