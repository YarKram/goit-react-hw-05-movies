import { fetchMovieCast } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Warning } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  console.log(movieId);

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast && cast.length === 0 && (
          <Warning>We do not have any actors here</Warning>
        )}
        {cast && (
          <>
            {cast.map(({ id, name, character, profile_path }) => {
              return (
                <li style={{ maxWidth: '200px' }} key={id}>
                  <img
                    width={200}
                    height={300}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://www.memecreator.org/static/images/memes/5055235.jpg'
                    }
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
