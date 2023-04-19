"use strict"

const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


const sumPositiveElements = (array) => {
    let sum = 0;
    array.forEach(function(item) {
        if (item > 0) sum += item;
    })
    return sum;
}
console.log(sumPositiveElements(array));


const countPositiveElements = (array) => {
    let count = 0;
    array.forEach(function(item) {
        if (item > 0) count += 1;
    })
    return count;
}
console.log(countPositiveElements(array));


const minElementArray = (array) => {
    let minElement = array[0];
    array.forEach(function(item) {
        if (item < minElement) minElement = item;
    })
    return minElement
}
console.log(minElementArray(array));
console.log(array.indexOf(minElementArray(array)));


const maxElementArray = (array) => {
    let maxElement = array[0];
    array.forEach(function(item) {
        if (item > maxElement) maxElement = item;
    })
    return maxElement
}
console.log(maxElementArray(array));
console.log(array.indexOf(maxElementArray(array)))


const countNegativeElements = (array) => {
    let count = 0;
    array.forEach(function(item) {
        if (item < 0) count += 1;
    })
    return count;
}
console.log(countNegativeElements(array));


const countOddPositiveElements = (array) => {
    let count = 0;
    array.forEach(function(item) {
        if (item > 0 && item % 2 === 1) count += 1;
    })
    return count;
}
console.log(countOddPositiveElements(array));


const countEvenPositiveElements = (array) => {
    let count = 0;
    array.forEach(function(item) {
        if (item > 0 && item % 2 === 0) count += 1;;
    })
    return count;
}
console.log(countEvenPositiveElements(array));


const sumEvenPositiveElements = (array) => {
    let sum = 0;
    array.forEach(function(item) {
        if (item > 0 && item % 2 === 0) sum += item;
    })
    return sum;
}
console.log(sumEvenPositiveElements(array));


const sumOddPositiveElements = (array) => {
    let sum = 0;
    array.forEach(function(item) {
        if (item > 0 && item % 2 === 1) sum += item;
    })
    return sum;
}
console.log(sumOddPositiveElements(array));


const multPositiveElements = (array) => {
    let mult = 1;
    array.forEach(function(item) {
        if (item > 0) mult *= item;
    }) 
    return mult;
}
console.log(multPositiveElements(array));


const maxElementOfArray = (array) => {
    const maxElement = Math.max.apply(null, array);
    // let maxElement = array[0];
    // array.forEach(function(item) {
    //     if (item > maxElement) maxElement = item;
    // })
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== maxElement) array[i] = 0;       
    }
    return array
}
console.log(maxElementOfArray(array));