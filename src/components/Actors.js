import React from "react";
import { actors } from "../data";
import ActorCard from "./ActorCard";

function Actors() {

  const displayActors = actors.map((actor, index)=> {
    return <ActorCard key={index} actor={actor} />
  })

  return <div>
    <h1>Actors Page</h1>
    {displayActors}
  </div>;
}

export default Actors;
