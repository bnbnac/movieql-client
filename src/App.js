import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moives from "./routes/Movies";
import Movie from "./routes/Movie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moives />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
