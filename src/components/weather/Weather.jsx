import React, { useEffect, useState } from 'react';
import './Weather.css';

const TMDB_API_KEY = 'de406839d37b11b7c65c304279c99674'; // Replace this with your actual TMDB API key

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Fetch error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies-page">
      <h2>🎬 Popular Movies (TMDB)</h2>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="info">
                <h3>{movie.title}</h3>
                <p>📅 {movie.release_date}</p>
                <p>⭐ {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
