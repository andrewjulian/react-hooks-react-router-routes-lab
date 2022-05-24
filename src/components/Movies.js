import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard"

function Movies() {


  const displayMovies = movies.map((movie, index) => {
    return <MovieCard key={index} movie={movie} />
  })

  return <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>;
}

export default Movies;
