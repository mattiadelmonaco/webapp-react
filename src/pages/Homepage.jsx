import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router";
import MoviesListComp from "../components/MoviesListComp";
import { useLoaderContext } from "../context/LoaderContext";

export default function Homepage() {
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);

  const { setIsLoading } = useLoaderContext();

  const fetchMoviesList = () => {
    setIsLoading(true);
    axios
      .get("/movies")
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchMoviesList, []);

  return (
    <section>
      <div className="container">
        <MoviesListComp moviesList={moviesList} />
      </div>
    </section>
  );
}
