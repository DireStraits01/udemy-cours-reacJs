'use strict';

let howMuch = prompt('how many films have you already watched?');
let lastMovie = prompt('what the last movie you wachted?');
let scoreMovie = prompt('your score?');

let personalMovieDb = {
  count: howMuch,
  movies: { [lastMovie]: scoreMovie },
  actors: {},
  genres: [],
  private: false,
};

console.log(personalMovieDb);
