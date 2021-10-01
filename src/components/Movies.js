import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movie Page</h1>
      <div>
        {movies.map((movie) => {
          return (
            <div>
              <h2 key={movie.title}>{movie.title}</h2>
              <h4>Duration: {movie.time} mins</h4>
              <h4>Genres:</h4>
              <ul>
                {movie.genres.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
