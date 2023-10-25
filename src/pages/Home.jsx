import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendMovies } from 'service/moviesAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

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
            <Link to={`/movies/${id}`}>
              <p>{original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
