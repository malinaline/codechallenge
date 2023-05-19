import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Character {
  name: string;
  height: string;
  mass: string;
  // Add more properties as needed
}

const CharactersPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://swapi.dev/api/films/${id}/people`
        );
        const data = await response.json();
        const characterUrls: string[] = data.results;

        const characterPromises = characterUrls.map(async (url: string) => {
          const characterResponse = await fetch(url);
          const characterData = await characterResponse.json();
          return characterData;
        });

        const characterDetails = await Promise.all(characterPromises);
        setCharacters(characterDetails);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [id]);

  if (characters.length === 0) {
    return <div>Loading characters...</div>;
  }

  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character, index) => (
        <div key={index}>
          <h3>{character.name}</h3>
          <p>{`Height: ${character.height}`}</p>
          <p>{`Mass: ${character.mass}`}</p>
          {/* Add more character details to display */}
        </div>
      ))}
    </div>
  );
};

export default CharactersPage;
