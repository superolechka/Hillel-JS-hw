'use strict';

let operand1;
let operand2;
function isEqual(operand1, operand2) {
    operand1 === operand2 ? console.log('true') : console.log('false')
};

function isSumMore(operand1, operand2) {
    operand1 + operand2 > 10 ? console.log('true') : console.log('false')
};

let someNumber;
function isNegativeNumber(someNumber) {
    someNumber < 0 ? console.log('true') : console.log('false')
}

// Інший варіант

let number1;
let number2;
function isEqualNum(number1, number2) {
    if (number1 === number2) {
        alert('true') 
    } else {
        alert('false')
    }    
};

function isSumMore(number1, number2) {
    if (number1 + number2 > 10) {
        alert('true') 
    } else {
        alert('false')
    } 
};

let anyNumber;
function isNegativeNum(anyNumber) {
    if (anyNumber < 0) {
        alert('true') 
    } else {
        alert('false')
    } 
}

