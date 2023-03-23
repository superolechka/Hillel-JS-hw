'use strict';

let num = prompt('Введіть число');
while (num === null || !num.trim() || isNaN(+num)) {
        num = prompt('Спробуйте ще раз. Введіть число:');
};

function isSimpl(num) {
    const userNum = Number(num);
    let n = 0;
    for (let i = 1; i <= userNum; i++) {
        if (userNum % i === 0) n += 1;
    }
    return n === 2;
}
console.log(isSimpl(num))
