import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router";

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
        <ul className="grid grid-cols-3 gap-10 my-10">
          {moviesList.map((movie) => {
            return (
              <li key={movie.id} className="space-y-2">
                {movie.image ? (
                  <img src={movie.img} alt={movie.title} />
                ) : (
                  <div>
                    <i className="fa-solid fa-image text-7xl text-black"></i>
                  </div>
                )}
                <h2>{movie.title}</h2>
                <p>Media dei voti: {movie.average_vote}</p>
                <h3>{movie.director}</h3>
                <h3>{movie.release_year}</h3>
                <h3>{movie.genre}</h3>
                <p>{movie.abstract}</p>
                <div className="bg-black text-center text-amber-300 rounded-xl max-w-40 px-3 py-1">
                  <Link to={`/single-movie/${movie.id}`}>
                    Maggiori dettagli
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
