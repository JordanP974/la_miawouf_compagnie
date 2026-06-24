import { NavLink } from "react-router-dom";
import FacebookBtn from "../FacebookBtn/FacebookBtn";
import logo from "../../assets/laMiaWoufCompagnie_Logo.png"

import "./Footer.css"

function Footer(){
  return(
    <footer>
      <section className="footer-sections">
      <article className="footer-title">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <h3 className="title">La MiaWouf Compagnie</h3>
        </div>
        <p>Chez La MiaWouf Compagnie, vos animaux sont nos amis. Garde à domicile et promenade, avec passion et sérieux.</p>
      </article>
        <article className="section-nav">
          <h3 className="section-title">Navigation</h3>
          <NavLink to={"/#"} className={"nav"}>Accueil</NavLink>
          <NavLink to={"/#"} className={"nav"}>À propos</NavLink>
          <NavLink to={"/#"} className={"nav"}>Compétences</NavLink>
          <NavLink to={"/#"} className={"nav"}>Services</NavLink>
          <NavLink to={"/#"} className={"nav"}>Demander un devis</NavLink>
          </article>
        <article className="section-serv">
          <h3 className="section-title">Services</h3>
          <NavLink to={"/#"} className={"nav"}>Garde à domicile</NavLink>
          <NavLink to={"/#"} className={"nav"}>Promenade</NavLink>
          <NavLink to={"/#"} className={"nav"}>Visites & NAC</NavLink>
          <NavLink to={"/#"} className={"nav"}>Services maison</NavLink>
          </article>
        <article className="section-contact">
          <h3 className="section-title">Contact</h3>
          <a href="tel:06 37 94 90 46">06 37 94 90 46</a>
          <a href="mailto:lamiawoufcompagnie@gmail.com">lamiawoufcompagnie@gmail.com</a>
          <a href="/contact">Villoncourt (88) et alentours</a>
          
          <FacebookBtn/>
          </article>
      </section>
      <div className="mention">
        <p>© 2025 La MiaWouf Compagnie — Tous droits réservés</p>
      </div>
    </footer>
  )
}
export default Footer;