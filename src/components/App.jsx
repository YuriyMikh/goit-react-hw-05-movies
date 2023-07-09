// import { getMovies } from "services/api/api";
import { NavLink, Route, Routes } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="movies" element={<Movies />} />
        </Route>

        {/* <Route path="/movies/:movieID" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
