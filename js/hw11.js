'use strict';

// task#1
const x = 10;
const y = 7;
x > y ? console.log('x більший за y') : console.log('x не більший за y');

// task#2
const num = prompt('Введіть число');
if (isNaN(+num) || num === null || !num.trim()) {
    console.log('Не число')
} else if (Number(num) % 2 === 0) {
    console.log('Число ' + num + ' парне')
} else {
    console.log('Число ' + num + ' непарне')
};

// task#3
const userNum = prompt('Введіть число');
if (userNum === null || !userNum.trim() || isNaN(+userNum)) {
    console.log('Не число')
} else if (+userNum === 0) {
    console.log(`Число ${userNum} нейтральне одноцифрове`)
} else {
    const count = userNum.length;
    let result;
    let signNum;
    let test = (+userNum / 0);
    if (test === Infinity) {
        signNum = "додатне";
        switch(count) {
            case 1:
                result = 'одноцифрове';
                break;
            case 2:
                result = 'двоцифрове';
                break;
            case 3:
                result = 'трицифрове';
                break;
            default:
                result = 'багатоцифрове';
                break;
        }
    }   else {
        signNum = "від'ємне";
        switch(count) {
            case 2:
                result = 'одноцифрове';
                break;
            case 3:
                result = 'двоцифрове';
                break;
            case 4:
                result = 'трицифрове';
                break;
            default:
                result = 'багатоцифрове';
                break;
        }
    }
    console.log(`${userNum} це ${signNum} ${result} число`)  
}

// task#4
let num1 = prompt('Введіть перше число');
while (isNaN(+num1) || num1 === null || !num1.trim()) {num1 = prompt(`Ви ввели не число.Спробуйте ще раз`)};  
let num2 = prompt('Введіть друге число');
while (isNaN(+num2) || num2 === null || !num2.trim()) {num2 = prompt(`Ви ввели не число.Спробуйте ще раз`)};  
let num3 = prompt('Введіть третє число');
while (isNaN(+num3) || num3 === null || !num3.trim()) {num3 = prompt(`Ви ввели не число.Спробуйте ще раз`)};  
if (+num1 > +num2) {
    +num1 > +num3 ? alert(num1) : alert(num3)
} else {
    +num2 > +num3 ? alert(num2) : alert(num3)
}


// task#5
let a = prompt('Введіть першу сторону');
while (a === null || !a.trim() || isNaN(+a)) {
    a = prompt('Спробуйте ще раз. Введіть число:');
}
let b = prompt('Введіть другу сторону');
while (b === null || !b.trim() || isNaN(+b)) {
    b = prompt('Спробуйте ще раз. Введіть число:');
};
let c = prompt('Введіть третю сторону');
while (c === null || !c.trim() || isNaN(+c)) {
    c = prompt('Спробуйте ще раз. Введіть число:');
};
if (Number(a) + Number(b) > Number(c) && Number(b) + Number(c) > Number(a) && Number(a) + Number(c) > Number(b)) {
    alert('Такий трикутник існує')
} else {
    alert('Такого трикутника не існує')
}