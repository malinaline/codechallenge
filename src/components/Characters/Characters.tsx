import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharactersStyled } from "./Characters.styled";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingSpinner/LoadingSpinner";

interface Character {
  name: string;
  //height: string;
  //mass: string;
  // Add more properties as needed
}

const CharactersPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieTitle, setMovieTitle] = useState<string | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const data = await response.json();
        const characterPromises = data.characters.map((url: string) =>
          fetch(url).then((response) => response.json())
        );
        const characterData = await Promise.all(characterPromises);
        setCharacters(characterData);
        setMovieTitle(data.title);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [id]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (characters.length === 0) {
    return <div>Error fetching characters.</div>;
  }

  return (
    <CharactersStyled>
      <h2>{`Characters from ${movieTitle}`}</h2>
      {characters.map((character, index) => (
        <div key={index}>
          <p>{character.name}</p>
        </div>
      ))}
      {/* Link to CharactersPage */}
      <Link to={`/${id}`}> ← Back to Details</Link>
    </CharactersStyled>
  );
};

export default CharactersPage;
