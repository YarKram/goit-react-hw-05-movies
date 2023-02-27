import { fetchMovieCast } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

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
                    // src={`https://image.tmdb.org/t/p/w500${profile_path}`}
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
