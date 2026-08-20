import photoTroisChiens from '../../../assets/trois chiens.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import './About.css';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <section className="section-about">
      <div className="container about-container">
        <img className="about-picture" src={photoTroisChiens} alt="photo trois chiens" />
        <SectionHeader
          eyebrow="à propos"
          title="Une passion pour les animaux depuis toujours"
          text="Titulaire d’un certificat de capacité, je prends soin de vos compagnons avec sérieux et douceur. Chiens, chats et NAC : chacun reçoit un soin adapté, et vous recevez régulièrement de ses nouvelles."
        >
          <div className="about-certif">
            <p className="certif">
              <FaCheckCircle size={15} color={'var(--rose)'} /> Certificat de capacité
            </p>
            <p className="certif">
              <FaCheckCircle size={15} color={'var(--rose)'} /> Garde à votre domicile, en confiance
            </p>
            <p className="certif">
              <FaCheckCircle size={15} color={'var(--rose)'} /> Promenade fiable et responsable
            </p>
            <NavLink to={'/about'} className={'btn-about'}>
            En savoir plus
          </NavLink>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
export default About;
