import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/moviesAPI';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  const [errror, setError] = useState(null);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    if (!movieId) return;
    const movieReviews = async () => {
      try {
        const movieData = await getMovieReviews(movieId);
        setReviews(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews !== null &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>
                  <span>Author: </span>
                  {author}
                </p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
