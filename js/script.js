const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '')

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('один из последних просмотренных фильмов', ''),
      b = prompt('на сколько вы его оцените?', ''),
      c = prompt('один из последних просмотренных фильмов', ''),
      d = prompt('на сколько вы его оцените?', '')

personalMovieDb.movies[a] = b  
personalMovieDb.movies[c] = d

console.log(personalMovieDb);