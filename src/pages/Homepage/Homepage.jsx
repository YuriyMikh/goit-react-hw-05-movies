import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
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
      console.log(589);
      fetchTrendingMovies().then(response => {
        console.log(response);
        setMovies(response);
      });
    }, []);

  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/movies">Movies</Link>
      </nav> */}
          {/* <ul> {movies.map()}</ul> */}
          <List movies={movies}></List>
    </div>
  );
};

export default Homepage;
