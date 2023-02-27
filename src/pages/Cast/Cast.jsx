import { fetchMovieCast } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast && (
          <>
            {cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <img
                    width={200}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                  <h2>{name}</h2>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </>
        )}
      </CastList>
    </div>
  );
};

export default Cast;
