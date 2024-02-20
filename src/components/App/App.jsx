import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const SearchMoviePage = lazy(() => import('../../pages/SearchMoviePage.jsx'));
const MoviePage = lazy(() => import('../../pages/MoviePage.jsx'));
const Header = lazy(() => import('../Header/Header.jsx'));
const Cast = lazy(() => import('../Cast/Cast.jsx'));
const Reviews = lazy(() => import('../Reviews/Reviews.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviePage />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
