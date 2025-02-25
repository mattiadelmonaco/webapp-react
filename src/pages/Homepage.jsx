import { useEffect } from "react";
import axios from "../api/axios";

export default function Homepage() {
  const fetchMoviesList = () => {
    axios.get("/movies").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(fetchMoviesList, []);

  return (
    <section>
      <h1>Movies list</h1>
    </section>
  );
}
