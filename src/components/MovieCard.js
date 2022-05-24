import React from 'react'

function MovieCard({movie}) {

    const {title, time, genres} = movie

    const displayGenres = genres.map((genre, index) => {
        return <li key={index}>{genre}</li>
    })

  return (
    <div>
        {title}
        {time}
        <ul>
            {displayGenres}
        </ul>
    </div>
  )
}

export default MovieCard;