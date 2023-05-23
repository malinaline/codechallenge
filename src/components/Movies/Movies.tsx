import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MoviesStyled } from "./Movies.styled";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export interface Film {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
}

const Movies = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Set isLoading to true by default

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setFilms(data.results);
        setIsLoading(false); // Set isLoading to false after films are fetched
      } catch (error) {
        console.log("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <MoviesStyled>
      <h1>Starwars Movie App</h1>
      <h2>Films</h2>
      <h3>Select a title below to show details</h3>
      {isLoading ? (
        <LoadingSpinner /> // Render the loading component if isLoading is true
      ) : (
        <ul>
          {films.map(
            (
              film,
              index //
            ) => (
              <Link key={film.episode_id} to={`${index + 1}`}>
                {film.title}
              </Link>
            )
          )}
        </ul>
      )}
    </MoviesStyled>
  );
};

export default Movies;
