import axios from "../api/axios";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function SingleMovie() {
  const { id } = useParams();

  const fetchMovie = () => {
    axios.get(`/movies/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(fetchMovie, [id]);

  return (
    <section>
      <h1>Single movie</h1>
    </section>
  );
}
