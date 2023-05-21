import { Link } from "react-router-dom";

const CharactersNoPage = () => {
  return (
    <>
      <h1>Nothing here yet, please go back to Home Page and select a movie</h1>
      <Link to={`/`}> Take me to Home Page </Link>
    </>
  );
};

export default CharactersNoPage;
