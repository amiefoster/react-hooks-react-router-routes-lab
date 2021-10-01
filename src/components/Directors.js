import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
        <h1>Directors Page</h1>
        <div>
          {directors.map(director => 
            {return <div> 
              <h2 key={director.name}>{director.name}</h2>
              <h4>Movies:</h4>
              <ul>{director.movies.map(movie => {return <li key={movie}>{movie}</li>})}</ul>
              </div>}
            )}
          <ul>
          {/* {movies.genres.map(genre => {console.log(genre) })} */}
          </ul>
        </div>
    </div>
  )
}

export default Directors;
