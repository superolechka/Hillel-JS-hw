'use strict';

// Task#1
const operand = +prompt('Введіть число');

if (operand === null || isNaN(operand) || operand === 0) {
    console.log("Щось пішло не так...")
}
else {
    console.log("Чудово! Ти молодець!")
}

// Task#2
const numOrStr = prompt('input number or string');

switch(numOrStr) {
    case null:
        console.log('Ви відмінили');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}

