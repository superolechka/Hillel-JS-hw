'use strict';

const a = 1;
const b = 15;
a === 0 ? console.log('Правильно') : console.log('Неправильно');
a > 0 ? console.log('Правильно') : console.log('Неправильно');
a < 0 ? console.log('Правильно') : console.log('Неправильно');
a >= 0 ? console.log('Правильно') : console.log('Неправильно');
a <= 0 ? console.log('Правильно') : console.log('Неправильно');
a !== 0 ? console.log('Правильно') : console.log('Неправильно');
a === 'test' ? console.log('Правильно') : console.log('Неправильно');
a === 1 ? console.log('Правильно') : console.log('Неправильно');
(a > 0 && a < 5) ? console.log('Правильно') : console.log('Неправильно');
(a === 0 || a === 2) ? console.log(a + 7) : console.log(a / 10);
(a <= 1 || b >= 3) ? console.log(a + b) : console.log(a - b);
(a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('Правильно') : console.log('Неправильно');
const num =2;
let result;
switch(num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'Не те число!';
        break;   
}
console.log(result);