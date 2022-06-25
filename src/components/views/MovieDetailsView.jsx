import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import * as moviesSearchService from '../../services/fetchMoviesApi';

function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    moviesSearchService
      .FetchMovieDetailsApi(movieId)
      .then(r => {
        return r;
      })
      .then(setMovieDetails);
  }, [movieId]);

  return (
    <>
      <Link to="/">
        <button>Go back</button>
      </Link>
      {movieDetails && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.original_title}</h2>

          <p>{movieDetails.overview}</p>
        </>
      )}
      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`cost`}>Cost</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
export default MovieDetailsView;
