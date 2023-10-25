import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/moviesAPI';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

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
                  <span className="bold">Author: </span>
                  {author}
                </p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      {error && window.alert(error)}
    </div>
  );
};

export default Reviews;
