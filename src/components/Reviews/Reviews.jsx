import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewContent, ReviewList } from './Reviews.styled';
import { fetchMovieReview } from 'services/api/api';

const Reviews = () => {
  const { movieID } = useParams();
    const [review, setReview] = useState([]);
    
  useEffect(() => {
    fetchMovieReview(movieID).then(data => setReview(data.results));
  }, [movieID]);
    
    
    if (review.length < 1) {
      return "We don't have any reviews for this movie.";
    }

  return (
    <>
      {/* {review ? null : <p>We don't find review for this film!</p>} */}
      <ReviewList>
        {review.map(({ author, content, id }) => (
          <li key={id}>
            <h5>Author: {author}</h5>
            <ReviewContent>{content}</ReviewContent>
          </li>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;
