import React, { useEffect, useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api/api';
import { List } from 'components/List';

const Homepage = () => {
  const [movies, setMovies] = useState(
    // () =>
    //   fetchTrendingMovies().then(res => {
    //       console.log('first');
    //     console.log(res);
    //     setMovies(prev => [prev, ...res]);
    //   }) ??
    []
  );

  // console.log(setMovies);

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      console.log(response);
      setMovies(response);
    });
  }, []);

  return (
    <>
      <div>Это homepage.jsx</div>

      <div>
        <List movies={movies}></List>
      </div>
    </>
  );
};

export default Homepage;
