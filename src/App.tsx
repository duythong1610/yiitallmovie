import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import { MovieWatch } from "./components/Movies/MovieWatch";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<MovieWatch />} />
    </Routes>
  );
}

export default App;
