import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/api/api';
import { HomeList, HomeListItem, HomeStyled } from './Home.styled.js';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <HomeStyled>Trending today</HomeStyled>
      <HomeList>
        {movies.map(movie => {
          return (
            <HomeListItem key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </HomeListItem>
          );
        })}
      </HomeList>
      <Outlet />
    </div>
  );
};

export default Home;
