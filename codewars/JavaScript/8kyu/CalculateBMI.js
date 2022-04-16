// Solution : Basic Conditionals

function bmi(weight, height) {
    let BMI = weight / height ** 2;
    if (BMI <= 18.5) {
        return 'Underweight';
    } else if (BMI <= 25) {
        return 'Normal';
    } else if (BMI <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

console.log(bmi(100, 123));
