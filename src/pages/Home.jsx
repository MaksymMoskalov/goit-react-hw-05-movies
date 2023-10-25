import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'service/moviesAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const renderHome = async () => {
      try {
        const movieData = await getTrendMovies();
        setMovies(movieData.results);
      } catch (error) {
        setError(error.message);
      }
    };
    renderHome();
  }, []);

  return (
    <ul>
      {error && window.alert(error)}
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link
              state={{ from: location }}
              to={`/movies/${id}`}
              className="movie-title"
            >
              <p>{original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
