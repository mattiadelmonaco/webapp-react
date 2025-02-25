import { useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();

  const fetchMoviesList = () => {
    axios
      .get("/movies")
      .then((res) => {
        console.log(res.data);
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
      <h1>Movies list</h1>
    </section>
  );
}
