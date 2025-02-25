import axios from "../api/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setReviews(res.data.reviews);
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
      <div className="container">
        <div className="bg-white rounded-2xl mt-10">
          <div className="flex justify-between p-10">
            {movie.image ? (
              <img src={movie.image} alt={movie.title} />
            ) : (
              <div className="flex justify-center">
                <i className="fa-solid fa-image text-7xl text-black"></i>
              </div>
            )}
            <div>
              <h2 className="text-center text-4xl font-extrabold">
                {movie.title}
              </h2>
              <h3>
                <strong>Regista: </strong>
                {movie.director}
              </h3>
              <h3>
                <strong>Data di uscita: </strong>
                {movie.release_year}
              </h3>
              <h3>
                <strong>Genere: </strong>
                {movie.genre}
              </h3>
              <p className="h-30">
                <strong>Trama: </strong>
                {movie.abstract}
              </p>
              <ul>
                {reviews.map((review) => {
                  return (
                    <li key={review.id}>
                      <h3>{review.name}</h3>
                      <h3>{review.vote}</h3>
                      <p>{review.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
