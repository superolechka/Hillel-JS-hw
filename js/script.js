'use strict';

// #1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const res1 = arr1.concat(arr2);
console.log(res1);

// #2
const array = [1, 2, 3];
const res2 = arr1.reverse();
console.log(res2);

// #3
const array3 = [1, 2, 3];
array3.push(4,5,6);
console.log(array3);

// #4
const array4 = [1, 2, 3];
array4.unshift(4,5,6);
console.log(array4);

// #5
const array5 = ['js', 'css', 'jq'];
console.log(array5[0]);

// #6
console.log(array5[array5.length-1]);

// #7
const myArray = [1, 2, 3, 4, 5];
const array7 = myArray.slice(0, 3);
console.log(array7);

// #8
const array8 = myArray.slice(3, myArray.length);
console.log(array8);

// #9
myArray.splice(1, 2);
console.log(myArray);

// #10
const myArray1 = [1, 2, 3, 4, 5];
const res10 = myArray1.slice(1,-1);
console.log(res10);

// #11
myArray1.splice(3, 0, 'a', 'b', 'c');
console.log(myArray1);

// #12
const myArray2 = [1, 2, 3, 4, 5];
myArray2.splice(1, 0, 'a', 'b');
myArray2.splice(6, 0, 'c');
myArray2.push('e');
console.log(myArray2);

// #13
const arr13 =  [3, 4, 1, 2, 7];
console.log(arr13.sort());

// #14
const arr14 = [5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr14.length; i++) {
    sum += arr14[i];
}
console.log(sum);

// #15
const arr15 = [5, 6, 7, 8, 9];
const newArr15 =[];
for (let i = 0; i < arr15.length; i++) {
    newArr15.push(arr15[i]**2)
}
console.log(newArr15);

// #16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const newArr16 =[];
for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] >= 0) continue;
    newArr16.push(arr16[i])
}
console.log(newArr16);

// #17
const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
const newArr17 =[];
for (let i = 0; i < arr17.length; i++) {
    if (arr17[i] % 2 === 0) newArr17.push(arr17[i]);
    continue;   
}
console.log(newArr17);

// #18
const arr18 =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const newArr18 =[];
for (let i = 0; i < arr18.length; i++) {
    if (arr18[i].length > 5) newArr18.push(arr18[i]);
    continue;   
}
console.log(newArr18);

// #19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const newArr19 =[];
for (let i = 0; i < arr19.length; i++) {
    if (Array.isArray(arr19[i])) newArr19.push(arr19[i]);
    continue;   
}
console.log(newArr19);

// #20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
let count =0;
for (let i = 0; i < arr20.length; i++) {
    if (arr20[i] >= 0) continue;
    count += 1
}
console.log(count);