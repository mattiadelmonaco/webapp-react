import axios from "../api/axios";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function SingleMovie() {
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);

  return (
    <section>
      <h1>Single movie</h1>
    </section>
  );
}
