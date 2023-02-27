import { fetchMoviesByQuery } from 'components/api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import {
  Input,
  MoviesStyled,
  Form,
  Button,
  MoviesListItem,
  MoviesList,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (movieName === '' || movieName === null) {
      return;
    }
    fetchMoviesByQuery(movieName).then(setMovies);
    fetchMoviesByQuery();
  }, [movieName]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.query.value });
    console.log(e.target.query.value);
    e.target.reset();
  };

  return (
    <div>
      <MoviesStyled>Movies</MoviesStyled>
      <Form onSubmit={onSubmit}>
        <Input name="query"></Input>
        <Button type="submit">Search</Button>
      </Form>
      <MoviesList>
        {movies.map(movie => {
          return (
            <MoviesListItem key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </MoviesListItem>
          );
        })}
      </MoviesList>
      <Outlet />
    </div>
  );
};

export default Movies;
