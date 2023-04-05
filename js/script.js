'use strict';

// #1
const arr = ['a', 'b', 'c', 'd'];
document.write(`'${arr[0]}+${arr[1]}, ${arr[2]}+ ${arr[3]}'`);
document.write('<br>');

// #2
const myArr = [2, 5, 3, 9];
const result = myArr[0] * myArr[1] + myArr[2] * myArr[3];
document.write(result);
document.write('<br>');

// #3
const myArray3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
document.write(myArray3[1][0]);
document.write('<br>');

// #4
const our = {
    js:['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}
document.write(our.js[0]);
document.write('<br>');

// #5
const newArray = [];
const length = 5;
let elem = 'x';
for (let i=0; i < length; i += 1) {
    newArray.push(elem);
    elem += 'x';
}
document.write(newArray);
document.write('<br>');

// #6
const arrNum = [];
const n = 10;
for (let i = 1; i <= n; i += 1) {
    let el = '';
    for (let k = 0; k < i; k += 1) {
        el += i;
    }
    arrNum.push(el)    
}
document.write(arrNum);
document.write('<br>');

// #7
const arrayFill = (element, count) => { 
    const ourArray = [];
    for (let i = 0; i < count; i += 1) {
        ourArray.push(element);
    }
    return ourArray
}
document.write(arrayFill('x', 5));
document.write('<br>');

// #8
const arrayOfNumber = [7, 1, 3, 8, 5];
const countSum = (arr8) => {
    let sum = 0;
    for (let i = 0; i < arr8.length; i += 1) {
    sum += arr8[i];
    if (sum > 10 ) return i+1;
    }
}
document.write(countSum(arrayOfNumber));
document.write('<br>');

// #9
const arrOfNumber = [1, 2, 3, 4, 5];
const reversArr = [];
for (let i = arrOfNumber.length-1; i >= 0; i -= 1) {
    reversArr.push(arrOfNumber[i])
}
document.write(reversArr);
document.write('<br>');

// #10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr10.length; i += 1) {
    for (let j = 0; j < arr10[i].length; j += 1) {
        sum += arr10[i][j];
    }
}
document.write(sum);
document.write('<br>');

// #11
const arr11 =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let add = 0;
for (let i = 0; i < arr11.length; i += 1) {
    for (let j = 0; j < arr11[i].length; j += 1) {
        for (let k = 0; k < arr11[i][j].length; k += 1) {
            add += arr11[i][j][k];
        }        
    }
}
document.write(add);
document.write('<br>');