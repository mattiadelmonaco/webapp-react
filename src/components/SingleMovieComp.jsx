import VoteInStars from "./voteInStars";

export default function SingleMovieComp({ movie }) {
  return (
    <div className="bg-white rounded-2xl mt-10 mx-5">
      <div className="grid grid-cols-12 p-6">
        {movie.image ? (
          <div className="max-h-[500px] max-w-[350px] col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 justify-self-center sm:justify-self-start mb-5 md:mb-0">
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
        <div className="space-y-2 sm:space-y-5 text-xl col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-8 ml-3">
          <h2 className="text-4xl font-extrabold mb-5">{movie.title}</h2>
          <h3 className="flex flex-col md:flex-row gap-3">
            <strong>Media dei voti: </strong>
            <div className="flex gap-2">
              <VoteInStars vote={movie.average_vote} />
              {movie.average_vote
                ? `(${movie.average_vote})`
                : "(Nessuna valutazione)"}
            </div>
          </h3>
          <h3 className="flex flex-col">
            <strong>Regista: </strong>
            {movie.director}
          </h3>
          <h3 className="flex flex-col">
            <strong>Anno di uscita: </strong>
            {movie.release_year}
          </h3>
          <h3 className="flex flex-col">
            <strong>Genere: </strong>
            {movie.genre}
          </h3>
          <p className="h-30 flex flex-col overflow-auto">
            <strong>Trama: </strong>
            {movie.abstract}
          </p>
        </div>
      </div>
    </div>
  );
}
