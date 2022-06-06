// Solution : Write a Given Equation in JS

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let pressure =
        ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
            (temp + 273.15) *
            0.082) /
        volume;
    return pressure;
};
