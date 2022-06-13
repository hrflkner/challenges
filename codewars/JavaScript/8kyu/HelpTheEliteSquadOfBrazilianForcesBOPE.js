// Solution : Stupid Kata About a Stupid Topic

function magNumber(info) {
    let key = {
        PT92: 17,
        M4A1: 30,
        M16A2: 30,
        PSG1: 5,
    };

    return Math.ceil((info[1] * 3) / key[info[0]]);
}
