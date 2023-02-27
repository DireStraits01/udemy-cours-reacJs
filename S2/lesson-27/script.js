'use strict';
// function getMathResult(num) {
//   let arr = [];
//   arr[0] = num - 1;
//   arr[1] = num;
//   arr[2] = num + 1;
//   return arr;
// }

// console.log(typeof getMathResult(5));
function getMathResult(baza, count) {
  if (count > 0 && Number.isInteger(count)) {
    let def = '---';
    let str = '';
    for (let i = 1; i < count + 1; ++i) {
      if (i == count) {
        str += baza * i;
      } else {
        str += baza * i + def;
      }
    }
    return str;
  } else {
    return toString(baza);
  }
}
console.log(getMathResult(5, 'k'));
