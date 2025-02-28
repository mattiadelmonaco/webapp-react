import { Link } from "react-router";
import VoteInStars from "./voteInStars";

export default function MoviesListComp({ moviesList }) {
  return (
    <ul className="grid justify-self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-7 lg:gap-7 my-10 mx-5">
      {moviesList.map((movie) => {
        return (
          <li
            key={movie.id}
            className="space-y-1 bg-white rounded-2xl shadow-2xl shadow-yellow-700 max-w-[300px]"
          >
            {movie.image ? (
              <div className="h-[400px] w-full flex justify-self-center mb-2">
                <img
                  className="h-full w-full object-cover"
                  src={movie.image}
                  alt={movie.title}
                />
              </div>
            ) : (
              <div className="flex justify-center">
                <i className="fa-solid fa-image text-7xl text-black"></i>
              </div>
            )}
            <h2 className="text-center text-2xl font-extrabold">
              {movie.title}
            </h2>
            <div className="mt-3 space-y-2 px-5">
              <h3 className="flex gap-1">
                <strong>Media dei voti: </strong>
                <VoteInStars vote={movie.average_vote} />
              </h3>
              <h3>
                <strong>Regista: </strong>
                {movie.director}
              </h3>
              <h3>
                <strong>Anno di uscita: </strong>
                {movie.release_year}
              </h3>
              <h3>
                <strong>Genere: </strong>
                {movie.genre}
              </h3>
              <p className="h-25 overflow-auto">
                <strong>Trama: </strong>
                {movie.abstract}
              </p>
            </div>
            <div className="ms-btn-info flex justify-self-center bg-black text-center text-amber-300 rounded-xl max-w-40 px-3 py-1 mt-1 mb-4">
              <Link to={`/single-movie/${movie.id}`}>Maggiori dettagli</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
