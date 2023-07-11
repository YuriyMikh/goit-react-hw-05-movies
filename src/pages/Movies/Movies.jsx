import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByKeyword } from 'services/api/api';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [searchMoviesByKeyword, setSearchMoviesByKeyword] = useState([]);

  const handleQuery = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //   console.log(value);
    if (!value) {
      alert('введите запрос');
      return;
    }

    fetchMoviesByKeyword(value).then(response => {
      //   console.log(response);
        if (response.length === 0) {
          alert('ничего не найдено');
        }

      setSearchMoviesByKeyword(response);
      // console.log(searchMoviesByKeyword);
    });
      
    setValue('');
  };

  return (
    <>
      <div>
        <br></br>
        Это страничка Movies.jsx
      </div>
      <input
        type="text"
        value={value}
        onChange={handleQuery}
        placeholder="enter a request"
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
      <ul>
        {searchMoviesByKeyword.map(movie => (
          <li key={movie.id}>
                <Link to={`${movie.id}` }> {movie.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
