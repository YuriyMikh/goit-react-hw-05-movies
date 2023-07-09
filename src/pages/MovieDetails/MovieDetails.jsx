import { useParams } from 'react-router-dom';
import { fetchMoviesByID } from 'services/api/api';

export const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = fetchMoviesByID(id);

  return (
    <div>
      Now showing movieDetails {movieDetails.title} with id - {id}
    </div>
  );
};
