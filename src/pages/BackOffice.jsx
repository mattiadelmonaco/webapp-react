import AddMovie from "../components/AddMovie";
import { useState } from "react";

export default function BackOffice() {
  const [formAddMovie, setFormAddMovie] = useState(false);

  const openAddMovie = () => {
    setFormAddMovie(!formAddMovie);
  };

  return (
    <div className=" grid grid-cols-12 gap-x-4 mt-10 h-screen mb-10">
      <div className="col-span-4 sm:col-span-3 p-4 bg-white rounded-tr-2xl rounded-br-2xl">
        <div className="space-y-2">
          <h2 className="text-md sm:text-xl font-extrabold bg-amber-300 rounded-sm px-3 py-1">
            Film
          </h2>
          <button
            type="button"
            className="ms-btn-info flex justify-self-center text-xs sm:text-lg text-white font-bold bg-blue-400 rounded-xl px-2 py-0.5 cursor-pointer"
            onClick={openAddMovie}
          >
            Aggiungi film
          </button>
        </div>
      </div>
      <div className="col-span-8 sm:col-span-9 p-3 bg-white rounded-tl-2xl rounded-bl-2xl">
        {!formAddMovie && (
          <h2 className="text-center font-extrabold text-xl sm:text-4xl md:text-5xl text-amber-400">
            IL TUO BACKOFFICE
          </h2>
        )}
        {formAddMovie && <AddMovie />}
      </div>
    </div>
  );
}
