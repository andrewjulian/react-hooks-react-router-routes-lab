import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";


function Directors() {

  const displayDirectors = directors.map((director, index)=> {
    return <DirectorCard key={index} director={director} />
  })

  return <div>
    <h1>Directors Page</h1>
    {displayDirectors}

  </div>;
}

export default Directors;
