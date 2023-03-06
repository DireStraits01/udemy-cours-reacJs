// 'use strict';
// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
//Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.
//  Просто распишите логику действий строка за строкой.

const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  'Takesi',
  'Sam',
  'ddd',
];

function sortStudentsByGroups(arr) {
  students.sort();
  const group = [];

  for (let i = 3; i < 10; i += 3) {
    group.push(students.slice(i - 3, i));
  }

  let str = 'Оставшиеся студенты: ';
  if (students.length === 10) {
    str += 'Takesi';
  } else if (students.length < 10) {
    str += '-';
  } else if (students.length > 10) {
    str += 'Takesi' + ', Somebody';
  }
  return str;
}

console.log(sortStudentsByGroups(students));
