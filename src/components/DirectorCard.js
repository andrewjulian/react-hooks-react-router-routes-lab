import React from 'react'

function DirectorCard({director}){

    const {name, movies} = director

    const displayDirectorMovies = movies.map((movie, index)=> {
        return <li key={index}>{movie}</li>
    })
  return (
    <div>
        {name}
        <ul>{
            displayDirectorMovies}
        </ul>   
    </div>
  )
}

export default DirectorCard;