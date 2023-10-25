import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'service/moviesAPI';

export const Search = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const searchedMovies = async () => {
      try {
        const movieData = await getMovieByKeyWord(query);
        console.log('movieData: ', movieData);

        setMovies(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    searchedMovies();
  }, [query]);

  const hendleFormSubmit = event => {
    event.preventDefault();
    const movieInSearch = event.currentTarget.elements.movieTitle.value;

    setSearchParams({ query: movieInSearch });
  };

  return (
    <div>
      <form onSubmit={hendleFormSubmit}>
        <label>
          <p>What would you like to watch ?</p>
          <input type="text" name="movieTitle" />
        </label>
        <button type="submit">Search</button>
      </form>
      <section>
        <ul>
          {movies !== null &&
            movies.map(({ id, original_title }) => {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`}>
                    <p>{original_title}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};
