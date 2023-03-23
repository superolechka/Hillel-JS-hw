'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function getPositiveArray(arr) {
    const positiveArr = [];
    if (!Array.isArray(arr)) return;
    if (arr.length === 0) return 'Введений масив - порожній';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) positiveArr.push(arr[i]);    
    }
    return positiveArr.length > 0 ? positiveArr : null;
}        
console.log(getPositiveArray(arr));