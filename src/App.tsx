import Home from "./pages/home";
import NoPage from "./pages/nopage";
import Navigation from "./components/Navigation";
import MovieDetailsPage from "./components/MovieDetails";
import CharactersPage from "./components/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//usehistory

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/:id/characters/" element={<CharactersPage />}></Route>
        <Route
          path="/:id/characters/" element=<p>bonus: show character-info</p>
        ></Route>
        <Route path="/search" element=<p>search</p>></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
