'use strict';

const mainFunction = (callback) => {
    const num1 = prompt('Введіть перше число');
    const num2 = prompt('Введіть друге число');
    if (!!num2 === 0 || isNaN(num2) || isNaN(num1) || !!num1 === 0 ) {
        alert('Ви ввели не корректні дані для обчислення');
    } else {
        callback(num1, num2);
    }   
}


const exponentiation = (base, exponent) => {
    const power = base ** exponent;
    alert(power);
}

const multiplay = (operand1, operand2) => {
    const mult = operand1 * operand2;
    alert(mult);
}

const division = (operand1, operand2) => {
    const div = operand1 / operand2;
    alert(div);
}

const modulo = (operand1, operand2) => {
    const mod = operand1 % operand2;
    alert(mod);
}


mainFunction(exponentiation)
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);