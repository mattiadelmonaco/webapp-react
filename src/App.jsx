import { BrowserRouter, Routes, Route, Router } from "react-router";
import MoviesList from "./pages/Homepage";
import SingleMoviePage from "./pages/SingleMoviePage";
import DefaultLayout from "./layouts/DefaultLayout";
import PageNotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesList />} />
            <Route path="/single-movie/:id" element={<SingleMoviePage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
