import { Route, Routes } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import { Movies } from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieDetails />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
