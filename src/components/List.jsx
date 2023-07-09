import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <br></br>
      List.jsx---Trending today
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link> {item.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
