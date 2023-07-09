import axios from 'axios';

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=3969575b7b3cc6462971102333f767aa'
  );

  return data.results;
};

//запрос полной информации о фильме для страницы кинофильма.
export const fetchMoviesByID = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3969575b7b3cc6462971102333f767aa`
  );

  return data;
};

//поиск кинофильма по ключевому слову на странице фильмов.
export const fetchMoviesByKeyword = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3969575b7b3cc6462971102333f767aa&include_adult=false&language=en-US&page=1`
  );

  return data.results;
};


//информация об актерском составе
//'https://api.themoviedb.org/3/movie/555555/credits?language=en-US';