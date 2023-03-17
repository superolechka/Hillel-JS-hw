'use strict';

let num = prompt('Введіть число');
while (num === null || !num.trim() || isNaN(+num)) {
        num = prompt('Спробуйте ще раз. Введіть число:');
};
let end; 
const lastFigure = +num % 10;
switch(lastFigure) {
    case 1:
        end = 'рік';
        break;
    case 2:
    case 3:
    case 4:        
        end = 'роки';
        break;
    default:
        end = 'років';
        break;
}
alert(`Вам ${num} ${end}.`)