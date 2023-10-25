import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  NavLink,
  useParams,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'service/moviesAPI';
import { Blocks } from 'react-loader-spinner';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const movieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <section>
      <Link to={backLinkHref.current} className="back-btn">
        Go back
      </Link>
      {movie !== null && (
        <div className="movie-info-cover">
          <img
            src={BASE_IMG_URL + movie.poster_path}
            alt=""
            className="poster-image"
          />
          <div>
            <h1>{movie.original_title}</h1>
            <span className="bold">Overview</span>
            <p>{movie.overview}</p>
            <span className="bold">Genres:</span>
            <p>
              {movie.genres
                .map(({ name }) => {
                  return `${name}`;
                })
                .join(', ')}
            </p>
          </div>
        </div>
      )}

      <div>
        <NavLink to={'cast'} className="details-link">
          Cast
        </NavLink>
        <NavLink to={'reviews'} className="details-link">
          Reviews
        </NavLink>
      </div>

      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
          />
        }
      >
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>

      {error && window.alert(error)}
    </section>
  );
};

export default MovieInfo;
