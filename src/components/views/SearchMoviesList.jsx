import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesSearchService from '../../services/fetchMoviesApi';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

export default function SearchMoviesList({ searchQuery }) {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  // const location = useLocation();
  // const searchQuery = new URLSearchParams(location.search).get('query') ?? null;

  useEffect(() => {
    searchQuery &&
      moviesSearchService
        .SearchMovieByName(searchQuery)
        .then(r => {
          setMovies(r);
          setError(null);
        })
        .catch(setError);
  }, [searchQuery]);

  return (
    <>
      {!movies && !error && (
        <ThreeDots height="100" width="100" color="blue" ariaLabel="loading" />
      )}
      {movies && (
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
      {error && <strong>Nothing found for your request</strong>}
    </>
  );
}
