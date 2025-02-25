import { BrowserRouter, Routes, Route, Router } from "react-router";
import MoviesList from "./pages/Homepage";
import SingleMovie from "./pages/SingleMovie";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/homepage" element={<MoviesList />} />
            <Route path="/single-movie" element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
