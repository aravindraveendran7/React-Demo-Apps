import { useState } from "react";

//in this case if you dont want the header to render each time the button is clicked place them outside this component
// in App.jsx
export function UpdatingArrayOfObjectsState() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "asdf",
      rating: 8,
    },
    { id: 2, Title: "ironman", rating: 9 },
  ]);

  return (
    <>
      <h3>Movie List With Ratings </h3>
      {movies.map((mov) => (
        <ol key={Math.random()}>
          <li>{mov.id}</li>
          <li>{mov.Title}</li>
          <li>{mov.rating}</li>
        </ol>
      ))}

      <button
        onClick={() =>
          setMovies(
            movies.map((mov) =>
              mov.id === 1
                ? { ...movies, id: 1, rating: 10, Title: "Avengers" }
                : mov
            )
          )
        }
      >
        Update Movie Title
      </button>
    </>
  );
}
