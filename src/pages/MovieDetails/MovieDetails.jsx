import { fetchMovieDetails } from 'components/api/api';

import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { AddLinfoLink, AddLinfoList, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <Button onClick={handleClick}>Go back</Button>
      {movie && (
        <div
          style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}
        >
          <div
            style={{
              display: 'flex',
              gap: 15,
              marginLeft: 20,
            }}
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={200}
              alt={movie.title}
            />

            <div>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {(movie.vote_average * 10).toFixed(0) + '%'}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <h2>Additional information</h2>
            <AddLinfoList>
              <AddLinfoLink>
                <Link state={location.state} to="cast">
                  Cast
                </Link>
              </AddLinfoLink>
              <AddLinfoLink>
                <Link state={location.state} to="reviews">
                  Reviews
                </Link>
              </AddLinfoLink>
            </AddLinfoList>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
