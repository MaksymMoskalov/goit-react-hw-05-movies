import { useEffect, useState } from 'react';
import { getMovieCast } from 'service/moviesAPI';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);
  const [errror, setError] = useState(null);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    if (!movieId) return;
    const movieCast = async () => {
      try {
        const movieData = await getMovieCast(movieId);
        setCast(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <div>
      {cast !== null && (
        <ul>
          {cast.map(({ name, character, profile_path, id }) => {
            return (
              <li key={id}>
                <img src={BASE_IMG_URL + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
