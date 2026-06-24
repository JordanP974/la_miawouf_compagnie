import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/laMiaWoufCompagnie_Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <Link to={"/"} className="logo" onClick={closeMenu}>
        <img src={logo} alt="logo la MiaWouf compagnie" />
        <span className="main-title">La MiaWouf Compagnie</span>
      </Link>

      <button
        className={`burger${menuOpen ? " burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-bar${menuOpen ? " nav-bar--open" : ""}`}>
        <NavLink to={"/"} className={"nav-home"} onClick={closeMenu}>Accueil</NavLink>
        <NavLink to={"/a-propos"} className={"nav-about"} onClick={closeMenu}>À propos</NavLink>
        <NavLink to={"/compétences"} className={"nav-skills"} onClick={closeMenu}>Compétences</NavLink>
        <NavLink to={"/services"} className={"nav-services"} onClick={closeMenu}>Services</NavLink>
        <NavLink to={"/contact"}  onClick={closeMenu}>Contact</NavLink>
        <NavLink to={"/contact"} className={"nav-contact"} onClick={closeMenu}>Demander un devis</NavLink>
      </nav>
    </header>
  );
}

export default Header;
