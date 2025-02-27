import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-black rounded-bl-4xl rounded-br-4xl">
      <div className="container">
        <div className="flex justify-between text-white items-center">
          <Link to="/">
            <img className="h-23" src="/logo-webapp.svg" alt="logo 138movies" />
          </Link>
          <h1 className="font-extrabold text-center text-[16px] sm:text-3xl md:text-4xl">
            BENVENUTO SU 138movies
          </h1>
          <ul className="space-y-1">
            <li className="mr-3 text-xs sm:text-sm bg-amber-300 px-1 py-0.5 rounded-md text-black font-bold">
              <Link to="/">HomePage</Link>
            </li>
            <li className="mr-3 text-xs sm:text-sm bg-amber-300 px-1 py-0.5 rounded-md text-black font-bold">
              <Link to="/back-office">BackOffice</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
