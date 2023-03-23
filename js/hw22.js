'use strict';

let num = prompt('Введіть число');
while (num === null || !num.trim() || isNaN(+num)) {
    num = prompt('Спробуйте ще раз. Введіть число:');
};

function minDivisor(num) {
    if (Number(num) < 1) return 'NaN';
    for (let i = 2; i < Number(num); i++) {
        if (Number(num) % i === 0) return i;
    }
    return `${num} - просте число`
}
console.log(minDivisor(num))
