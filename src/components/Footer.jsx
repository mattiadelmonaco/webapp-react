import { Link } from "react-router";
import SocialBtnRightFooter from "./SocialBtnRightFooter";

export default function Footer() {
  return (
    <footer className="bg-black rounded-tl-4xl rounded-tr-4xl">
      <div className="container">
        <div className="flex justify-between">
          <Link to="/">
            <img className="h-25" src="/logo-webapp.svg" alt="logo 138movies" />
          </Link>
          <SocialBtnRightFooter />
        </div>
      </div>
    </footer>
  );
}
