import React, { useEffect, useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api/api';
import { List } from 'components/List';

const Homepage = () => {

  const [movies, setMovies] = useState([]);

  // console.log(setMovies);

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      // console.log(response);
      setMovies(response);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <div>
        <List movies={movies}/>
      </div>
    </>
  );
};

export default Homepage;
