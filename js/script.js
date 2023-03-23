'use strict';

function fib(n = 1) {
    if (n === null || isNaN(n)) return 'n - не число'
    let a = 0;
    let b = 1;
    if (n === 1) return a;
    if (n === 2) return b;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(fib(1));
  console.log(fib(2));
  console.log(fib(4));
  console.log(fib(5));
  console.log(fib('апрпк'));