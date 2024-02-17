import { useState } from "react";

export function UpdatinObjectState() {
  const [movie, setMovieRating] = useState({
    moviename: "Neru",
    rating: 9,
  });

  return (
    <>
      <h3>MovieName:{movie.moviename}</h3>
      <h5>Rating:{movie.rating}</h5>
      <button onClick={() => setMovieRating({ ...movie, rating: 0 })}>
        Change Rating
      </button>
    </>
  );
}
