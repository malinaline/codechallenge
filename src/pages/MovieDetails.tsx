import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Movie ID: {id}</p>
      {/* Add more details about the movie */}
    </div>
  );
};

export default MovieDetails;
