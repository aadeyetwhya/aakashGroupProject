import React from 'react'

function MovieCard({movieData}) {
  return (
      <div className="movieCard">
                        <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}

`} alt="" className='movieImage' />
                        <div className="movieDescriptions">
                            <h3 className="movieName">
                               {movieData.original_title}
                            </h3>
                            <p className="movieDate">
                                 {movieData.release_dat}
                            </p>
                            <div className="movieRating">
                                ⭐ 6.154
                            </div>
                        </div>
                    </div>
  )
}

export default MovieCard