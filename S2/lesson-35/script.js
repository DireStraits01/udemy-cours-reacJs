'use strict';
const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  showAgeAndLangs: function (obj) {
    let str = '';
    let space = ' ';
    obj['skills']['languages'].forEach(
      (el) => (str += el.toUpperCase() + space)
    );
    return `Мне ${obj.age} и я владею языками: ${str}`;
  },
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
};

function showExperience(personalPlanPeter) {
  return personalPlanPeter['skills']['exp'];
}

function showProgrammingLangs(plan) {
  let arr = '';
  for (let key in plan['skills']['programmingLangs']) {
    if (key !== ' ') {
      arr += `Язык ${key} изучен на ${plan['skills']['programmingLangs'][key]}\n`;
    }
  }
  return arr;
}
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
