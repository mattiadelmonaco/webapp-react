import { Link } from "react-router";

export default function MoviesListComp({ moviesList }) {
  return (
    <ul className="grid grid-cols-3 gap-10 my-10">
      {moviesList.map((movie) => {
        return (
          <li
            key={movie.id}
            className="space-y-1 bg-white p-5 rounded-2xl shadow-2xl shadow-yellow-700"
          >
            {movie.image ? (
              <img src={movie.img} alt={movie.title} />
            ) : (
              <div className="flex justify-center">
                <i className="fa-solid fa-image text-7xl text-black"></i>
              </div>
            )}
            <h2 className="text-center text-2xl font-extrabold">
              {movie.title}
            </h2>
            <div className="mt-5">
              <h3>
                <strong>Media dei voti: </strong>
                {movie.average_vote}
              </h3>
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
            </div>
            <div className="ms-btn-info flex justify-self-center bg-black text-center text-amber-300 rounded-xl max-w-40 px-3 py-1">
              <Link to={`/single-movie/${movie.id}`}>Maggiori dettagli</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
