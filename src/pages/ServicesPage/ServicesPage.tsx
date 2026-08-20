import Pagetitle from '../../components/PageTitle/PageTitle';

import './ServicePage.css';
import ServicesCards from '../../components/ServicesCards/ServicesCards';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Steps from './Steps/Steps';
import Price from './Price/Price';

function ServicesPage() {
  return (
    <>
      <Pagetitle title="Services" description="Découvrez nos services de garde et promenade pour chiens." />

      <section className="services-section ">
        <div className="container">
          <SectionHeader
            eyebrow="Mes services"
            title="Des prestations sur mesure"
            text="Chaque animal est unique. Voici comment je prends soin du vôtre, toujours dans le confort de son foyer."
          />
        </div>
      </section>
      <section className="cards-section container">
        <ServicesCards showFeatures={true} showLink={false} showImg={true} showPill={true} />
      </section>
      <section className="section-steps  ">
        <Steps />
      </section>
      <Price/>
    </>
  );
}

export default ServicesPage;
