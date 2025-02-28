import { useState } from "react";
import axios from "../api/axios";

const initialData = {
  title: "",
  director: "",
  genre: "",
  release_year: "",
  abstract: "",
  image: undefined,
};

export default function AddMovie() {
  const [formData, setFormData] = useState(initialData);

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setFormData(initialData);
      });
  };

  return (
    <form className="space-y-3 " onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h2 className="text-center font-extrabold text-4xl mt-5 mb-10">
          Aggiungi un nuovo film
        </h2>
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
        <label htmlFor="release_year">Data di uscita:</label>
        <input
          type="number"
          id="release_year"
          name="release_year"
          required
          className="border border-amber-200 rounded-lg text-center py-0.5 px-2"
          value={formData.release_year}
          onChange={(e) => handleField("release_year", e.target.value)}
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
          onChange={(e) => handleField("image", e.target.files[0])}
        />
      </div>

      <button
        type="submit"
        className="ms-btn-info flex justify-self-center bg-amber-300 text-center text-lg rounded-xl px-3 py-1 cursor-pointer"
      >
        Aggiungi film
      </button>
    </form>
  );
}
