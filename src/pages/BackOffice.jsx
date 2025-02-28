import { useState } from "react";
import { useParams } from "react-router";

const initialData = {
  title: "",
  director: "",
  genre: "",
  release: "",
  abstract: "",
  image: "",
};

export default function BackOffice() {
  const [formData, setFormData] = useState(initialData);

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <div className=" grid grid-cols-12 gap-x-4 mt-10">
      <div className="col-span-4 sm:col-span-3 p-4 bg-white rounded-tr-2xl rounded-br-2xl">
        <div className="space-y-2">
          <h2 className="text-md sm:text-xl font-extrabold bg-amber-300 rounded-sm px-3 py-1">
            Film
          </h2>
          <button
            type="button"
            className="ms-btn-info flex justify-self-center text-xs sm:text-lg text-white font-bold bg-blue-400 rounded-xl px-2 py-0.5 cursor-pointer"
          >
            Aggiungi film
          </button>
        </div>
      </div>
      <div className="col-span-8 sm:col-span-9 p-3 bg-white rounded-tl-2xl rounded-bl-2xl">
        <form className="space-y-3">
          <div className="flex flex-col items-center">
            <label htmlFor="title">Titolo:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5 px-2"
              value={formData.title}
              onChange={(e) => handleField("title", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="director">Regista:</label>
            <input
              type="text"
              id="director"
              name="director"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5 px-2"
              value={formData.director}
              onChange={(e) => handleField("director", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="genre">Genere:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5 px-2"
              value={formData.genre}
              onChange={(e) => handleField("genre", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="release">Data di uscita:</label>
            <input
              type="date"
              id="release"
              name="release"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5 px-2"
              value={formData.date}
              onChange={(e) => handleField("release", e.target.value)}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="abstract">Trama:</label>
            <textarea
              name="abstract"
              id="abstract"
              rows={3}
              placeholder="Inserisci qui la trama"
              required
              className="border border-amber-200 w-[80%] rounded-lg px-3 py-1 mt-1.5"
              value={formData.abstract}
              onChange={(e) => handleField("abstract", e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="image">Seleziona immagine copertina:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5 px-2 w-[70%]"
              onChange={(e) => handleField("image", e.target.files)}
            />
          </div>

          <button
            type="submit"
            className="ms-btn-info flex justify-self-center bg-amber-300 text-center text-lg rounded-xl px-3 py-1 cursor-pointer"
          >
            Aggiungi film
          </button>
        </form>
      </div>
    </div>
  );
}
