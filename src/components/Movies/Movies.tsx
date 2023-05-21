import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MoviesStyled } from "./Movies.styled";

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

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.log("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <MoviesStyled>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <Link key={film.episode_id} to={film.episode_id.toString()}>
            {film.title}
          </Link>
        ))}
      </ul>
    </MoviesStyled>
  );
};

export default Movies;
