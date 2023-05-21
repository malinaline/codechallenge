import Home from "./pages/home";
import NoPage from "./pages/nopage";
import CharactersNoPage from "./charactersnopage";
import NavigationDesktop from "./components/Navigation/Navigation";
import MovieDetailsPage from "./components/DetailsMovie/MovieDetails";
import CharactersPage from "./components/Characters/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//usehistory

function App() {
  return (
    <BrowserRouter>
      <NavigationDesktop />
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/characters/" element={<CharactersNoPage />}></Route>
        <Route path="/:id/characters/" element={<CharactersPage />}></Route>
        <Route path="/search" element=<p>search</p>></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
