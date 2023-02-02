import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import { MovieWatch } from "./components/Movies/MovieWatch";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movie/:movieId" element={<MovieWatch />} />
      <Route path="/:movieId" element={<Home />} />
    </Routes>
  );
}

export default App;
