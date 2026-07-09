import { NavLink } from 'react-router-dom';
import FacebookBtn from '../FacebookBtn/FacebookBtn';
import logo from '../../assets/laMiaWoufCompagnie_Logo.png';
import { contact } from '../../data/contact';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <section className="footer-sections">
          <article className="footer-title">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
              <h3 className="title">La MiaWouf Compagnie</h3>
            </div>
            <p>
              Chez La MiaWouf Compagnie, vos animaux sont nos amis. Garde à domicile et promenade, avec passion et
              sérieux.
            </p>
          </article>
          <article className="section-nav">
            <h3 className="section-title">Navigation</h3>
            <NavLink to={'/#'} className={'nav'}>
              Accueil
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              À propos
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Compétences
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Services
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Demander un devis
            </NavLink>
          </article>
          <article className="section-serv">
            <h3 className="section-title">Services</h3>
            <NavLink to={'/#'} className={'nav'}>
              Garde à domicile
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Promenade
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Visites & NAC
            </NavLink>
            <NavLink to={'/#'} className={'nav'}>
              Services maison
            </NavLink>
          </article>
          <article className="section-contact">
            <h3 className="section-title">Contact</h3>
            {contact.map((c) => (
              <a href={c.href}>{c.content}</a>
            ))}

            <FacebookBtn />
          </article>
        </section>
        <div className="mention">
          <p>© 2025 La MiaWouf Compagnie — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
