import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router";
import MoviesListComp from "../components/MoviesListComp";

export default function Homepage() {
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);

  const fetchMoviesList = () => {
    axios
      .get("/movies")
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
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
