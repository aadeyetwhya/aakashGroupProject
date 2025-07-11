import React, { useEffect, useState } from 'react'
import './MovieLists.css'
import MovieCard from '../movieCard/MovieCard'

function MovieLists() {
 const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=de406839d37b11b7c65c304279c99674&language=en-US&page=1`
      );

      if (!response.status==200) {
        throw new Error('Sorry!! movie loading failed');
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
        <div className="moviePage">
            <div className="movies">
                <h1 className="moviePageTitle">
                    🎬 Popular Movies (TMDB)
                </h1>
                <div className="movieList">
               { movies.map((eachMovieData,index)=>{
                    return <MovieCard key={index} movieData={eachMovieData}/>
                })
            }
                
                              




                </div>
            </div>
        </div >
    )
}

export default MovieLists