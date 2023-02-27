'use strict';

function fib(num) {
  let prom = 0;
  let result = '';
  if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
      result += prom;
      result += ' ';
      if (prom == 0) {
        prom = 1;
      } else {
        prom =
          parseInt(result.charAt(result.length - 4)) +
          parseInt(result.charAt(result.length - 2));
      }
    }
    return result.slice(0, -1);
  } else {
    return '';
  }
}
console.log(getMathResult(6));
