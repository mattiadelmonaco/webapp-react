export default function SingleMovieComp({ movie }) {
  return (
    <div className="bg-white rounded-2xl mt-10">
      <div className="grid grid-cols-12 justify-between p-6">
        {movie.image ? (
          <div className="h-[500px] w-[350px] col-span-4">
            <img
              className="h-full w-full rounded-2xl"
              src={movie.image}
              alt={movie.title}
            />
          </div>
        ) : (
          <div>
            <i className="fa-solid fa-image text-9xl text-black"></i>
          </div>
        )}
        <div className="space-y-5 text-xl col-span-8">
          <h2 className="text-4xl font-extrabold mb-5">{movie.title}</h2>
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
      </div>
    </div>
  );
}
