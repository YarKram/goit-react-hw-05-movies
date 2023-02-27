import Loader from 'components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Nav, NavLinkButton } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Nav>
        <NavLinkButton to="/">Home</NavLinkButton>
        <NavLinkButton to="/movies">Movies</NavLinkButton>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
