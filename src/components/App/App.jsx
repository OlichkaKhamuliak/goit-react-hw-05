import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../pages/MoviePage.jsx';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';
import { Cast } from '../Cast/Cast.jsx';
import { Reviews } from '../Reviews/Reviews.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<SearchForm />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
