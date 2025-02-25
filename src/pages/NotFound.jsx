import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="text-center text-white">
        <div className="flex justify-center">
          <i className="fa-regular fa-face-sad-tear text-[200px] mb-10"></i>
        </div>
        <h1 className="text-4xl font-bold">PAGINA NON TROVATA</h1>
        <h2 className="text-3xl font-semibold my-2">Status: 404</h2>
        <p className="text-xl">
          Stavi cercando una pagina rimossa o inesistente.
        </p>
        <p className="text-xl">
          Clicca in basso per tornare alla Homepage oppure all'elenco dei post
        </p>
        <div className="flex justify-around">
          <Link to="/" className="under-costruction__btn">
            Torna alla Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
