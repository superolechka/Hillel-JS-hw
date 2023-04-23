'use strict'

const getFactorial = (n) => {
    if (n === 0) return 1;
    return n * getFactorial(n - 1);
};
console.log(getFactorial(5));


const pow = (num, degree) => {
    if (degree === 0) return 1;
    return num * pow(num, degree-1);
} 
console.log(pow(3, 4));


const getSum = (a, b) => {
    if (b === 0) return a;
    return getSum(++a, --b)   
}
console.log(getSum(3, 4));
