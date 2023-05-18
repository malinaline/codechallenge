import FilmList from "./pages/FilmList";

import NoPage from "./pages/nopage";
import Navigation from "./components/Navigation";
//import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/filmlist" element={<FilmList />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
