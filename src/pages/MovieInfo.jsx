import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { NavLink, useParams, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from 'service/moviesAPI';

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const [errror, setError] = useState(null);
  const { movieId } = useParams();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

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
      {movie !== null && (
        <div>
          <img src={BASE_IMG_URL + movie.poster_path} alt="" />
          <h1>{movie.original_title}</h1>
          <span>Overview</span>
          <p>{movie.overview}</p>
          <span>Genres:</span>
          <p>
            {movie.genres
              .map(({ name }) => {
                return `${name}`;
              })
              .join(' ')}
          </p>
        </div>
      )}

      <div>
        <NavLink to={'cast'}>Cast</NavLink>
        <NavLink to={'reviews'}>Reviews</NavLink>
      </div>

      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </section>
  );
};
