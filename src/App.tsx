import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FilmList from "./pages/FilmList";

const Home = () => <h1>Welcome to the Home page!</h1>;

const Films = () => <FilmList />;

const Film = () => <h1>Welcome to the Film page!</h1>;
const FilmCharacters = () => <h1>Welcome to the Film Characters page!</h1>;
const NotFound = () => <h1>404 - Page not found</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/films" Component={Films} />
        <Route path="/films/:id" Component={Film} />
        <Route path="/films/:id/characters" Component={FilmCharacters} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
