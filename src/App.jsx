import { BrowserRouter, Routes, Route } from "react-router";
import MoviesList from "./pages/MoviesList";
import SingleMovie from "./pages/SingleMovie";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/movies-list" element={<MoviesList />} />
          <Route path="/single-movie" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
