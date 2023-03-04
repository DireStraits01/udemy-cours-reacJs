'use strict';
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length > 0) {
    let str = arr.join(' ');
    return `Семья состоит из: ${str}`;
  } else {
    return 'Семья пуста';
  }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  let str = '';
  let space = '\n';
  arr.forEach((el) => (str += el.toLocaleLowerCase() + space));
  return str;
}
const someString = 'This is some strange string';
function reverse(str) {
  let arr;
  let strReverse;
  let reverseArray;
  arr = someString.split('');

  reverseArray = arr.reverse();

  strReverse = reverseArray.join('');
  return strReverse;
}

// 4) Представьте такую реальную ситуацию. У вас есть банкомат,
//который выдает деньги из двух разных банков в разных валютах.
//Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr,
//которая принимает два аргумента: первый - это массив со всеми доступными валютами
//из двух банков сразу (сейчас представим, что они не могут повторяться), второй -
//необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в
// банкомате. Если массив в первом аргументе пустой - то функция возвращает строку
//'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = 'Доступные валюты:\n';
  const filterAray = arr.filter((el) => el !== missingCurr);
  for (let i = 0; i < filterAray.length; i++) {
    str += filterAray[i] + '\n';
  }
  return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'));
