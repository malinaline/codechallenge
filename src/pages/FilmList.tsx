import React, { useState, useEffect } from "react";

 
export interface Film {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
}

export interface Character {
  name: string;
}

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showCharacters, setShowCharacters] = useState(false);

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
      const characterData = await Promise.all(characterPromises);
      setCharacters(characterData);
    } catch (error) {
      console.log("Error fetching characters:", error);
    }
  };

  const handleCharactersClick = () => {
    setShowCharacters(!showCharacters);
  };

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id} onClick={() => handleFilmClick(film)}>
            {film.title}
          </li>
        ))}
      </ul>
      {selectedFilm && (
        <div>
          <h2>Selected Film: {selectedFilm.title}</h2>
          <p>Episode ID: {selectedFilm.episode_id}</p>
          <p>Director: {selectedFilm.director}</p>
          <p>Producer: {selectedFilm.producer}</p>
          <p>Release Date: {selectedFilm.release_date}</p>
          <h3 onClick={handleCharactersClick}>Characters</h3>
          {showCharacters && (
            <ul>
              {characters.map((character) => (
                <li key={character.name}>{character.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FilmList;
