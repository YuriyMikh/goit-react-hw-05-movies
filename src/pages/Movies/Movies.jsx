import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from 'services/api/api';

const Movies = () => {
  const [value, setValue] = useState('');
  const [searchMoviesByKeyword, setSearchMoviesByKeyword] = useState([]);
  const [param, setParam] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const query = param.get('query');
    if (!query) return;
    fetchMoviesByKeyword(query).then(data => setSearchMoviesByKeyword(data));
  }, [param]);

  const handleQuery = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParam({ query: value });
  };

  return (
    <>
      <div>
        <br></br>
      </div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleQuery}
          placeholder="enter a request"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchMoviesByKeyword.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
