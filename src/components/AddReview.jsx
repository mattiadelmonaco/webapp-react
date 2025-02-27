import { useState } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";

const initialData = {
  name: "",
  vote: 1,
  text: "",
};

export default function AddReview({ fetchMovie }) {
  const [formData, setFormData] = useState(initialData);

  const { id } = useParams();

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
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialData);
        fetchMovie();
      });
  };

  return (
    <div className="bg-white mx-5 rounded-2xl p-5 mb-10">
      <h2 className="font-bold text-center mb-5 text-lg sm:text-3xl">
        Lascia una recensione
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-row justify-center gap-3 sm:gap-10">
          <div className="flex items-center gap-3">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-amber-200 rounded-lg text-center py-0.5"
              value={formData.name}
              onChange={(e) => handleField("name", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="vote">Voto (max 5):</label>
            <input
              type="number"
              id="vote"
              name="vote"
              min={1}
              max={5}
              required
              className="border border-amber-200 rounded-lg text-center py-0.5"
              value={formData.vote}
              onChange={(e) => handleField("vote", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="text">Recensione:</label>
          <textarea
            name="text"
            id="text"
            rows={3}
            placeholder="Inserisci qui la tua recensione"
            required
            className="border border-amber-200 w-[80%] rounded-lg px-3 py-1 mt-1.5"
            value={formData.text}
            onChange={(e) => handleField("text", e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="ms-btn-info flex justify-self-center bg-amber-300 text-center text-lg rounded-xl px-3 py-1 cursor-pointer"
        >
          Aggiungi recensione
        </button>
      </form>
    </div>
  );
}
