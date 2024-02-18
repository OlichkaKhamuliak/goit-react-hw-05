import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../pages/MoviePage.jsx';
import { Header } from '../Header/Header';
import { SearchMovie } from '../SearchForm/SearchForm.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<SearchMovie />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
