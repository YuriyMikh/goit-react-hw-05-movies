import { FormSearchMovies } from 'components/FormSearchMovies/FormSearchMovies';
import { List } from 'components/List';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from 'services/api/api';

const Movies = () => {
  const [searchMoviesByKeyword, setSearchMoviesByKeyword] = useState([]);
  const [param, setParam] = useSearchParams();

  useEffect(() => {
    const query = param.get('query');
    if (!query) return;
    fetchMoviesByKeyword(query).then(data => setSearchMoviesByKeyword(data));
  }, [param]);

  const handleSubmit = query => {
    setParam({ query: query });
  };

  return (
    <>
      <FormSearchMovies onSubmit={handleSubmit} />
      <List movies={searchMoviesByKeyword} />
    </>
  );
};

export default Movies;
