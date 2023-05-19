import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface Film {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
}

//wrappa filmarna i links

const Movies = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [, setSelectedFilm] = useState<Film | null>(null);

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

  const handleFilmClick = async (film: Film) => {
    try {
      setSelectedFilm(film);
      const characterUrls = film.characters;
      const characterPromises = characterUrls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const characters = await Promise.all(characterPromises);
      console.log("Characters:", characters);
      // Handle characters data as desired
    } catch (error) {
      console.log("Error fetching characters:", error);
    }
  };
  console.log(films);
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <Link
            key={film.episode_id}
            onClick={() => handleFilmClick(film)}
            to={film.episode_id.toString()}
          >
            {film.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
//lista på film (/movies), klicka på den och få information
// /movies/:id
// /movies/:id/actor

//skapa characte
