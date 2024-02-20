import { useEffect, useRef, useState } from 'react';
import { searchMovie } from '../api';
import SearchForm from '../components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import css from '../components/ErrorMessage/ErrorMessage.module.css';
import Loader from '../components/Loader/Loader';

const SearchMoviePage = () => {
  const [searchFilms, setSearchFilm] = useState([]);
  const [page, setPage] = useState(1);
  const [emptyResults, setEmptyResults] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get('query') ?? '');

  //Дозволяє зберігати попереднє значення змінної. Використовуючи цей хук, отримуєм доступ до попереднього значення змінної у компоненті.
  const prevQuery = usePrevious(query);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const changeQuery = newQuery => {
    if (!newQuery.trim()) {
      return;
    }
    setEmptyResults(false);
    // setSearchFilm([]);
    setVisibleBtn(false);
    setQuery(newQuery);

    setParams(params => {
      const newParams = new URLSearchParams(params);
      newParams.set('query', newQuery);
      return newParams;
    });
  };

  useEffect(() => {
    if (!query) return;
    //Перевіряємо чи значення в інпуті при сабміті співпадає з попереднім
    if (query !== prevQuery) {
      setSearchFilm([]);
      setPage(1);
    }
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await searchMovie({
          abortController: controller,
          query: query,
          page: page,
        });
        if (results.length === 0) {
          setEmptyResults(true);
          //Очищуємо query in params коли значення не знайдено
          setParams(params => {
            const newParams = new URLSearchParams(params);
            newParams.set('query', '');
            return newParams;
          });
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
  }, [query, page, prevQuery, setParams]);

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
      {error && <ErrorMessage>Ooooppps!!! Try to reload the page...</ErrorMessage>}
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

export default SearchMoviePage;
