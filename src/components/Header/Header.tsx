import { Link } from "react-router-dom";
import logo from "../../assets/star-wars-white.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/" className="header__link">
        <img src={logo} alt="logo" className="header__logo"></img>
        <h1 className="header__text">
          Star Wars Codex
        </h1>
      </Link>
    </header>
  );
}

export default Header;