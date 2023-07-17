import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <br></br>

      <ul>
        {movies.map(item => (
          <li key={item.id}>
            {/* Надо чтоб значение в to={} было строка. Если придет число (например айдишник как тут), то работать не будет. Поэтому надо сделать интерполяцю через шаблонную строчку и привести в любом случае к строке */}
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
