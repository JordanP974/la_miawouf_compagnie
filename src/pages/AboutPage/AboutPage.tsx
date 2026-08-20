
import Engagements from './Engagements/engagements';
import "./AboutPage.css"
import Pagetitle from '../../components/PageTitle/PageTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function About() {
  return (
    <>
    <Pagetitle title="À propos" description="En savoir plus sur la MiaWouf compagnie" />
    <section className="section-about">
      <SectionHeader
        eyebrow="À propos"
        eyebrowClassName="price-eyebrow"
        title="Une passion devenue métier"
        titleClassName="price-title"
        text="Depuis l’enfance, les animaux occupent une place centrale dans ma vie. Aujourd’hui, j’en ai fait mon métier : prendre soin des vôtres."
        textClassName="price-text"
      />

      <article className="about-card">
        <img src="" alt="" />
        <div className="content-about">
          <h3 className="about-title">Vos animaux, ma priorité</h3>
          <p>
            Titulaire d’un certificat de capacité pour les animaux domestiques, je mets mon expérience et ma douceur au
            service de vos compagnons : chiens, chats et NAC.
          </p>
          <p>
            Je privilégie la garde à votre domicile, pour que votre animal reste dans son environnement familier, avec
            ses repères et ses habitudes. Moins de stress, plus de sérénité — pour lui comme pour vous.
          </p>
          <p>
            Chaque garde est personnalisée selon l’âge, le caractère et les besoins de l’animal. Et vous recevez
            régulièrement de ses nouvelles.
          </p>
          <span>— Votre pet-sitter à Villoncourt —</span>
        </div>
      </article>

      <section className="section-engagements">
        <Engagements/>
      </section>
    </section>
    </>
  );
}

export default About;
