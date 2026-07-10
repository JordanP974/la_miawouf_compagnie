import Pagetitle from '../../components/PageTitle/PageTitle';


import './ServicePage.css';
import ServicesCards from '../../components/ServicesCards/ServicesCards';

function ServicesPage() {
  return (
    <>
      <Pagetitle title="Services" description="Découvrez nos services de garde et promenade pour chiens." />
      <main id="main-container">
        <section className="services-section ">
          <div className="container">
            <div className="section-content">
              <span className="eyebrow">Mes services</span>
              <h2 className="section-title">Des prestations sur mesure</h2>
              <p className="section-text">
                Chaque animal est unique. Voici comment je prends soin du vôtre, toujours dans le confort de son foyer.
              </p>
            </div>
          </div>
        </section>
        <section className="cards-section ">
          <ServicesCards showFeatures={true} showLink={false} showImg={true} showPill={true} />
        </section>
      </main>
    </>
  );
}

export default ServicesPage;
