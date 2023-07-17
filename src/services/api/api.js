import axios from 'axios';

const API_KEY = '3969575b7b3cc6462971102333f767aa';

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

//запрос полной информации о фильме для страницы кинофильма.
export const fetchMoviesByID = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//поиск кинофильма по ключевому слову на странице фильмов.
export const fetchMoviesByKeyword = async query => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

//информация об актерском составе
export const fetchMovieCast = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//информация об отзывах о фильме
export const fetchMovieReview = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
