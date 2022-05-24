import React from 'react'

function ActorCard({actor}){

    const {name, movies} = actor

    const displayMovies = movies.map((movie, index)=> {
        return <li key={index}>{movie}</li>
    })


  return (
    <div>
        {name}
        <ul>
            {displayMovies}
        </ul>
        
    </div>

  )
}

export default ActorCard;