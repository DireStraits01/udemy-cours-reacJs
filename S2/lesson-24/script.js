'use strict';
// Место для первой задачи
// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   // Не трогаем
//   return result;
// }
// console.log(firstTask());

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] !== 'number') {
//       data[i] = data[i] + ' - done';
//     } else {
//       data[i] = data[i] * 2;
//     }
//   }

//   // Не трогаем
//   return data;
// }
// console.log(secondTask());
function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < data.length; i++) {
    result.unshift(data[i]);
  }
  // Не трогаем
  return result;
}
console.log(thirdTask());
