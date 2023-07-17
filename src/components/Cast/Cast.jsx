import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastPhoto } from './Cast.styled';
import { fetchMovieCast } from 'services/api/api';

const Cast = () => {
  const { movieID } = useParams();
    const [cast, setCast] = useState([]);
    
  useEffect(() => {
    fetchMovieCast(movieID).then(data => setCast(data.cast));
  }, [movieID]);
    
    if (cast.length < 1) {
      return "We don't have any casting information for this movie.";
    }
    
  return (
    <CastList>
      {cast.map(({ id, character, name, profile_path }) => (
        <CastItem key={id}>
          <CastPhoto
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
