"use strict"

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1. Знайти суму та кількість позитивних елементів.
const sumPositiveElements = (array) => {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        sum += array[i];
    }
    return sum;
}
console.log(sumPositiveElements(array));

const countPositiveElements = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        count += 1;
    }
    return count;
}
console.log(countPositiveElements(array));

//2. Знайти мінімальний елемент масиву та його порядковий номер.
const minElementArray = (array) => {
    let minElement = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minElement) minElement = array[i];
    }
    return minElement
}
console.log(minElementArray(array));
console.log(array.indexOf(minElementArray(array)))

//3. Знайти максимальний елемент масиву та його порядковий номер.
const maxElementArray = (array) => {
    let maxElement = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElement) maxElement = array[i];
    }
    return maxElement
}
console.log(maxElementArray(array));
console.log(array.indexOf(maxElementArray(array)))

//4. Визначити кількість негативних елементів.
const countNegativeElements = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) continue;
        count += 1;
    }
    return count;
}
console.log(countNegativeElements(array));

//5. Знайти кількість непарних позитивних елементів.
const countOddPositiveElements = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        if (array[i] % 2 === 0) continue;
        count += 1;
    }
    return count;
}
console.log(countOddPositiveElements(array));

//6. Знайти кількість парних позитивних елементів.
const countEvenPositiveElements = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        if (array[i] % 2 === 1) continue;
        count += 1;
    }
    return count;
}
console.log(countEvenPositiveElements(array));

// 7. Знайти суму парних позитивних елементів.
const sumEvenPositiveElements = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        if (array[i] % 2 === 1) continue;
        sum += array[i];
    }
    return sum;
}
console.log(sumEvenPositiveElements(array));

// 8. Знайти суму непарних позитивних елементів.
const sumOddPositiveElements = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        if (array[i] % 2 === 0) continue;
        sum += array[i];
    }
    return sum;
}
console.log(sumOddPositiveElements(array));

//9. Знайти добуток позитивних елементів.
const multPositiveElements = (array) => {
    let mult = 1; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        mult *= array[i];
    }
    return mult;
}
console.log(multPositiveElements(array));

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
const maxElementOfArray = (array) => {
    let maxElement = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElement) maxElement = array[i];       
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== maxElement) array[i] = 0;       
    }
    return array
}
console.log(maxElementOfArray(array));
