'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function getPositiveArray(arr) {
    const positiveArr = [];
    if (arr.length === 0) console.log('Введений масив - порожній');
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > 0 ) {  
           positiveArr.push(arr[i]);
        }
    }
    if (positiveArr.length > 0) {
        return positiveArr;
    } else {
        return null
    }
}
console.log(getPositiveArray(arr));