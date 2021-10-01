import React from "react";
import { actors } from "../data";

function Actors() {
    return (
      <div>
          <h1>Actors Page</h1>
          <div>
            {actors.map(actor => 
              {return <div> 
                <h2 key={actor.name}>{actor.name}</h2>
                <h4>Movies:</h4>
                <ul>{actor.movies.map(movie => {return <li key={movie}>{movie}</li>})}</ul>
                </div>}
              )}
          </div>
      </div>
    )
  }


export default Actors;
