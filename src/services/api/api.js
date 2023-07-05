import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=3969575b7b3cc6462971102333f767aa'
  );

  return data.results;
};

// export const getSearchMovies = async query => {
//   const data = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?api_key=3969575b7b3cc6462971102333f767aa&query=${query}&include_adult=false&language=en-US&page=1`
//   );

//   return data;
// };
