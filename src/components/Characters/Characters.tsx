import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledCharacters } from "./StyledCharacters";
import LoadingPage from "../Loader";

interface Character {
  name: string;
  height: string;
  mass: string;
  // Add more properties as needed
}

const CharactersPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
    <StyledCharacters>
      <h2>Characters</h2>
      {characters.map((character, index) => (
        <div key={index}>
          <h3>{character.name}</h3>
          <p>{`Height: ${character.height}`}</p>
          <p>{`Mass: ${character.mass}`}</p>
        </div>
      ))}
    </StyledCharacters>
  );
};

export default CharactersPage;
