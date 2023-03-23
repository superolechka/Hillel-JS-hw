'use strict';

const str = 'hillel';
const num = 10;
const symbol = '@';
const bool = false;

const padString = (string, length, symbol, right = true) => {
    if (typeof string !== 'string') throw new Error('Перший аргумент має бути рядком');
    if (typeof length !== 'number' || Number.isNaN(length) || !isFinite(length)) {
        throw new Error('Другий аргумент має бути числом')
    }

    if (string.length === length) return string;
    if (string.length > length) return string.substring(0, length);

    if (typeof symbol !== 'string' || symbol.length !== 1) {
        throw new Error('Третій аргумент має бути рядком, довжиною 1');
    }
    if (typeof right !== 'boolean') throw new Error('Четвертий аргумент має бути булевим');

    const add = symbol.repeat(length - string.length);
    return right ? string + add : add + string;   
}

console.log(padString(str, num, symbol, bool));



