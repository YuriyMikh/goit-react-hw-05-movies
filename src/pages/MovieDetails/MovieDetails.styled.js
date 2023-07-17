import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilmInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const FilmBanner = styled.img`
  width: 250px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const GenresItem = styled.li`
  padding: 5px ;
    
`;

export const AdditionalInfo = styled.p`
  margin-bottom: 20px;
`;

export const ButtonBack = styled(Link)`
  display: block;
  max-width: 80px;
  margin-bottom: 10px;
  /* border-radius: 8px; */
  padding: 3px 12px;
  /* border: 1px solid black; */
  /* background-color: rgb(255, 170, 170); */
  &:hover {
    cursor: pointer;
    /* background-color: rgb(255, 240, 240); */
  }
`;
