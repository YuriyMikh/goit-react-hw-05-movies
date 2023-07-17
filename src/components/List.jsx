import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const List = ({ movies }) => {
  const location = useLocation();

  console.log(movies);
  return (
    <div>
      <br></br>

      <ul>
        {movies.map(item => (
          <li key={item.id}>
            {/* Надо чтоб значение в to={} было строка. Если придет число (например айдишник как тут), то работать не будет. Поэтому надо сделать интерполяцю через шаблонную строчку и привести в любом случае к строке */}
            <Link
              to={`/movies/${item.id.toString()}`}
              state={{ from: location }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
