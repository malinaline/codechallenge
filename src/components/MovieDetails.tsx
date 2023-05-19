import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Movie {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  characters: string[];
  // Add more properties as needed
}

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{`Movie Title: ${movie.title}`}</h2>
      <p>{`Episode ID: ${movie.episode_id}`}</p>
      <p>{`Director: ${movie.director}`}</p>
      <p>{`Release Date: ${movie.release_date}`}</p>

      {/* Link to CharactersPage */}
      <Link to={`/${id}/people`}>Characters</Link>
    </div>
  );
};

export default MovieDetailsPage;
