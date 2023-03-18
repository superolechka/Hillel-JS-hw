'use strict';

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
for (let i = 10; i < 20; i++) {
    document.write(`${i}, `)    
}
document.write('20.');

// 2. Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    document.write(`${i**2} <br>`);    
}

// 3. Вивести таблицю множення на 7.
for (let i = 1; i < 11; i++) {
    let result = 7 * i;
    document.write(`7 * ${i} = ${result}`);
    document.write("<br/>"); 
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.
const target = 15;
let sum = 0;

for (let i = 1; i <= target; i += 1) {
  sum += i;
}
console.log(sum);

//5.  Знайти добуток усіх цілих чисел від 15 до 35.
const target = 35;
let product = BigInt(1);

for (let i = 15; i <= target; i += 1) {
  product *= BigInt(i);
}
console.log(product);

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
const target = 500;
let sum = 0;

for (let i = 1; i <= target; i += 1) {
  sum += i;
}
const middle = sum / target;
console.log(middle);

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
const target = 80;
let sum = 0;

for (let i = 30; i <= target; i += 1) {
    if (i % 2 === 1 ) continue;
    sum += i;
}
console.log(sum);

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const target = 200;

for (let i = 100; i <= target; i += 1) {
    if (i % 3 === 0) {
        document.write(`${i} <br>`)
    }
}

//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const num = Math.floor(Math.random() * 100) + 10;
document.write(`Дільники числа ${num}:<br>`);
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        document.write(`${i}<br>`)
    }
}

//10. Визначити кількість його парних дільників.
const num = Math.floor(Math.random() * 100) + 10;

let e = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) { 
        e += 1;
    } 
}
document.write(`кількість парних дільників числа ${num} дорівнює ${e}`);

// 11. Знайти суму його парних дільників.
const num = Math.floor(Math.random() * 100) + 10;
let sumEven = 0;
for (let i = 1; i <= num; i++) {
    if ((num % i === 0) && (i % 2 === 0)) { 
        sumEven += i; 
    }      
}
document.write(`Сума парних дільників числа ${num} дорівнює ${sumEven}`); 

// 12. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i < 11; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        document.write(`${i} * ${j} = ${result}`);
        document.write("<br/>");    
    }
    document.write("<br/>");
}  