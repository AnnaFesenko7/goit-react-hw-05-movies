import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesSearchService from '../../services/fetchMoviesApi';

export default function SearchMoviesList({ searchQuery }) {
  const [movies, setMovies] = useState(null);
  // const location = useLocation();
  // const searchQuery = new URLSearchParams(location.search).get('query') ?? null;
  console.log('searchQuery in SearchMoviesList', searchQuery);

  useEffect(() => {
    searchQuery &&
      moviesSearchService.SearchMovieByName(searchQuery).then(setMovies);
  }, [searchQuery]);

  console.log(movies);
  return (
    <>
      {!movies && <h2>Загружаем...</h2>}
      {movies && (
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
