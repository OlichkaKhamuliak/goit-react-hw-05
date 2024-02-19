import { useEffect, useState } from 'react';
import { searchMovie } from '../api';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import css from '../components/ErrorMessage/ErrorMessage.module.css';

export const SearchMoviePage = () => {
  const [searchFilms, setSearchFilm] = useState([]);
  const [page, setPage] = useState(1);
  const [emptyResults, setEmptyResults] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  console.log(query);
  //   const page = params.get('page') ?? '1';
  const changeQuery = newQuery => {
    if (!newQuery.trim()) {
      return;
    }
    setEmptyResults(false);

    params.set('query', newQuery);
    setParams(params);
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const { results, total_pages } = await searchMovie({
          abortController: controller,
          query: query,
          page: page,
        });
        if (results.length === 0) {
          setEmptyResults(true);
          return;
        }
        setSearchFilm(prevResults => [...prevResults, ...results]);
        setVisibleBtn(total_pages !== page);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setVisibleBtn(true);
  };
  return (
    <div>
      <SearchForm onSubmit={changeQuery} />
      {searchFilms.length > 0 && <MoviesList films={searchFilms} />}
      {emptyResults && (
        <ErrorMessage>Sorry, but no films were found for your query.😭</ErrorMessage>
      )}
      {loading ? <Loader /> : visibleBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      {error && <p>{error.message}</p>}
      <Toaster
        containerStyle={{
          left: 0,
          right: 0,
        }}
        toastOptions={{
          className: css.toaster,
        }}
      />
    </div>
  );
};
