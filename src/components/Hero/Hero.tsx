import { PiPawPrintFill } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import imgHero from '../../assets/img_samy.avif';
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container">
      <section className='hero-info'>
        <div className="hero-pill">
          <p>
            <PiPawPrintFill /> Garde à domicile · Villoncourt (88) et les alentours
          </p>
        </div>
        <div className="hero-intro">
          <h2 className="hero-title">La garde de qualité que votre animal mérite</h2>
          <p className="hero-text">
            Chiens, chats et NAC gardés chez vous, pour une absence courte ou longue. Un service de confiance, complété
            gratuitement par le ramassage du courrier, l’arrosage des plantes et la gestion des volets.
          </p>
        </div>
        <div className="hero-btn">
          <NavLink to={'/contact'} className={'btn-reserve'}>
            Réserver une garde
          </NavLink>
          <NavLink to={'/contact'} className={'btn-services'}>
            Voir les services
          </NavLink>
        </div>
        <div className="hero-certif">
          <p className="certif">
            <FaCheckCircle /> Certificat de capacité
          </p>
          <p className="certif">
            <FaCheckCircle /> Passionné depuis l’enfance
          </p>
        </div>
      </section>
      <section className="hero-img">
        <img src={imgHero} alt="image principale d'un berger blanc suisse" />
      </section>
    </div>
  );
}

export default Hero;
