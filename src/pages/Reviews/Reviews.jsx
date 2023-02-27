import { fetchMovieReviews } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Warning } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length === 0 && (
        <Warning>We don't have any reviews for this movie.</Warning>
      )}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
