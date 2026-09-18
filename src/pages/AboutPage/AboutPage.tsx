import Engagements from './Engagements/Engagements';
import './AboutPage.css';
import Pagetitle from '../../components/PageTitle/PageTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import LogoImg from '../../assets/laMiaWoufCompagnie_Logo.png';

function About() {
  return (
    <>
      <Pagetitle title="À propos" description="En savoir plus sur la MiaWouf compagnie" />

      <section className="section-about">
        <SectionHeader
          eyebrow="À propos"
          title="Une passion devenue métier"
          text="Depuis l’enfance, les animaux occupent une place centrale dans ma vie. Aujourd’hui, j’en ai fait mon métier : prendre soin des vôtres."
        />

        <article className="about-card container">
          <figure className="about-logo">
            <img src={LogoImg} alt="logo de la MiaWouf compagnie" />
          </figure>

          <div className="about-card-content">
            <h3 className="about-card-title">Vos animaux, ma priorité</h3>
            <p>
              Titulaire d’un certificat de capacité pour les animaux domestiques, je mets mon expérience et ma douceur
              au service de vos compagnons : chiens, chats et NAC.
            </p>
            <p>
              Je privilégie la garde à votre domicile, pour que votre animal reste dans son environnement familier, avec
              ses repères et ses habitudes. Moins de stress, plus de sérénité — pour lui comme pour vous.
            </p>
            <p>
              Chaque garde est personnalisée selon l’âge, le caractère et les besoins de l’animal. Et vous recevez
              régulièrement de ses nouvelles.
            </p>
            <p className="about-signature">— Votre pet-sitter à Villoncourt —</p>
          </div>
        </article>
      </section>

      <section className="section-engagements">
        <Engagements />
      </section>
    </>
  );
}

export default About;
