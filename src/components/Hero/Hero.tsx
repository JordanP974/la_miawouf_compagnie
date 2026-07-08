import { PiPawPrintFill, PiRabbit, PiCat   } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import imgHero from '../../assets/img_samy.avif';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container container">
      <section className="hero-info">
        <div className="hero-pill--container">
          <div className="hero-pill">
            <p>
              <PiPawPrintFill /> Chiens
            </p>
          </div>
          <div className="hero-pill">
            <p>
              <PiCat  /> Chats
            </p>
          </div>
          <div className="hero-pill">
            <p>
              <PiRabbit  /> NAC
            </p>
          </div>
        </div>

        <div className="hero-intro">
          <h1 className="hero-title">La garde de qualité que votre animal mérite</h1>
          <p className="hero-text">
            Chiens, chats et NAC gardés chez vous, pour une absence courte ou longue. Un service de confiance, complété
            gratuitement par le ramassage du courrier, l’arrosage des plantes et la gestion des volets.
          </p>
        </div>
        <div className="hero-btns">
          <NavLink to={'/contact'} className={'btn-reserve'}>
            Réserver une garde
          </NavLink>
          <NavLink to={'/contact'} className={'btn-services'}>
            Voir les services
          </NavLink>
        </div>
        <div className="hero-certif">
          <p className="certif">
            <FaCheckCircle size={15} color={'var(--rose)'} /> Certificat de capacité
          </p>
          <p className="certif">
            <FaCheckCircle size={15} color={'var(--rose)'} /> Passionné depuis l’enfance
          </p>
        </div>
      </section>
      <section className="hero-img">
        
        <img className="shadow" src={imgHero} alt="image principale d'un berger blanc suisse" />
      </section>
    </div>
  );
}

export default Hero;
