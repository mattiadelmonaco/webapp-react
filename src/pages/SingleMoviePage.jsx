import axios from "../api/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import SingleMovieComp from "../components/SingleMovieComp";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import { useLoaderContext } from "../context/LoaderContext";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const { isLoading, setIsLoading } = useLoaderContext();

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
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchMovie, [id, navigate]);

  return (
    <section>
      <Link
        to="/"
        className="bg-white rounded-full inline px-3 text-2xl relative top-5 left-5"
      >
        <i className="fa-solid fa-left-long"></i>
      </Link>

      <div className="container">
        <SingleMovieComp movie={movie} />

        <Reviews reviews={reviews} />
        <AddReview fetchMovie={fetchMovie} />
      </div>
    </section>
  );
}
