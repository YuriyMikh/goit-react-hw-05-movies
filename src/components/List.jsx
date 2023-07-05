import React from 'react';

export const List = ({ movies }) => {
    console.log(movies);
  return (
    <div>
      List
      <ul>
        {movies.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
