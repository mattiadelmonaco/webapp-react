import { BrowserRouter, Routes, Route, Router } from "react-router";
import MoviesList from "./pages/Homepage";
import SingleMovie from "./pages/SingleMovie";
import DefaultLayout from "./layouts/DefaultLayout";
import PageNotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesList />} />
            <Route path="/single-movie/:id" element={<SingleMovie />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
