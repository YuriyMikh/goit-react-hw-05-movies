import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesByID } from 'services/api/api';
import {
  AdditionalInfo,
  ButtonBack,
  FilmBanner,
  FilmInfoWrapper,
  GenresItem,
  GenresList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesByID(movieID).then(response => {
      console.log(response);

      const { title, poster_path, vote_average, overview, genres } = response;

      setMovieDetails({
        photo: `https://image.tmdb.org/t/p/original/${poster_path}`,
        title,
        votes: vote_average * 10,
        overview,
        genres,
      });
    });
  }, [movieID]);

  if (!movieDetails) {
    return;
  }

  const { photo, title, votes, overview, genres } = movieDetails;

  return (
    <>
      <ButtonBack to={location?.state?.from || '/'}>Go back</ButtonBack>
      <FilmInfoWrapper>
        <FilmBanner src={photo} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>User score: {votes?.toFixed(2)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres?.map(item => (
              <GenresItem key={item.id}>{item.name}</GenresItem>
            ))}
          </GenresList>
        </div>
      </FilmInfoWrapper>
      <hr />
      <AdditionalInfo>Additional information</AdditionalInfo>
      <GenresList>
        <GenresItem>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </GenresItem>
        <GenresItem>
          <Link state={location.state} to="reviews">
            Reviews
          </Link>
        </GenresItem>
      </GenresList>
      <hr />
      <Outlet />
    </>

    // <>
    //   <h2>Это файл movieDetails.jsx, айдишник - {movieID}</h2>
    //   <div>{movieDetails.id}</div>
    //   <div>Overview: {movieDetails.overview}</div>
    // </>
  );
};

export default MovieDetails;
