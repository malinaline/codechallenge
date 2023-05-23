import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from "./components/Characters/Characters";
import CharactersNoPage from "./pages/charactersNopage";
import Home from "./pages/home";
import MovieDetailsPage from "./components/DetailsMovie/MovieDetails";
import Navigation from "./components/Navigation/Navigation";
import NoPage from "./pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/characters/" element={<CharactersNoPage />}></Route>
        <Route path="/:id/characters/" element={<CharactersPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
