import { BrowserRouter, Routes, Route, Router } from "react-router";
import MoviesList from "./pages/Homepage";
import SingleMoviePage from "./pages/SingleMoviePage";
import DefaultLayout from "./layouts/DefaultLayout";
import PageNotFound from "./pages/NotFound";
import BackOffice from "./pages/BackOffice";
import { LoaderProvider } from "./context/LoaderContext";

export default function App() {
  return (
    <>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MoviesList />} />
              <Route path="/single-movie/:id" element={<SingleMoviePage />} />
              <Route path="/back-office" element={<BackOffice />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}
