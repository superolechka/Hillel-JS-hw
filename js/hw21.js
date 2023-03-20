'use strict';

let num = prompt('Введіть число');
while (num === null || !num.trim() || isNaN(+num)) {
        num = prompt('Спробуйте ще раз. Введіть число:');
};

function isSimpl(num) {
    let n = 0;
    for (let i = 1; i <= Number(num); i++) {
        if (Number(num) % i === 0) n += 1;
    }
    return n === 2 ? true : false;
}
console.log(isSimpl(num))
