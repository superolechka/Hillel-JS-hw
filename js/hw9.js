'use strict';

const operand1 = Number(prompt("Введіть перше число"));
const operand2 = Number(prompt("Введіть друге число"));

function isEqual(operand1, operand2) {
    return operand1 === operand2;
};
console.log(isEqual(operand1, operand2));

function isSumMore(operand1, operand2) {
   return operand1 + operand2 > 10 ? true : false
};
console.log(isSumMore(operand1, operand2));

function isNegativeNumber(operand1) {
   return operand1 < 0 
}
console.log(isNegativeNumber(operand1))


