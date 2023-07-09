import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByID } from 'services/api/api';

export const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
      fetchMoviesByID(movieID).then(response => {
        console.log(response);
        setMovieDetails(response);
      });
    }, [movieID]);


  return (
    <>
      <h2>Это файл movieDetails.jsx, айдишник - {movieID}</h2>
      <div>{movieDetails.id}</div>
      <div>Overview: {movieDetails.overview}</div>
    </>
  );
};
