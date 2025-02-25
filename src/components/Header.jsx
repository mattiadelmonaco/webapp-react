import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-black rounded-bl-4xl rounded-br-4xl">
      <div className="container">
        <div className="flex justify-between text-white items-center">
          <Link to="/">
            <img className="h-23" src="/logo-webapp.svg" alt="logo 138movies" />
          </Link>
          <h1 className="font-extrabold text-4xl">BENVENUTO SU 138movies</h1>
          <ul>
            <li>
              <Link to="/"> HomePage</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
