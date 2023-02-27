'use strict';
let howMuch = null;
let lastMovie;
let scoreMovie;
let personalMovieDb = {
  count: howMuch,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(howMuch === ' ');
for (let i = 0; i < 10; i++) {
  if (
    howMuch === null ||
    howMuch.length == 0 ||
    howMuch.length > 50 ||
    !Number.isInteger(parseInt(howMuch))
  ) {
    howMuch = prompt('how many films have you already watched?');
    if (howMuch < 10 && Number.isInteger(parseInt(howMuch))) {
      alert('malo');
    } else if (howMuch > 10 && howMuch < 30) {
      alert('Вы классический зритель');
    } else if (howMuch < 30 && Number.isInteger(parseInt(howMuch))) {
      alert('kinoman');
    }
  }
  // if (lastMovie === '' || lastMovie.length > 50) {
  //   lastMovie = prompt('what the last movie you wachted?');
  // }
  // if (scoreMovie === '' || scoreMovie.length > 50) {
  //   scoreMovie = prompt('your score?');
  // }
  // personalMovieDb[count] = howMuch;
}

console.log(personalMovieDb);
