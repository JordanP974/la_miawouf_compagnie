import { PiPottedPlantDuotone, PiMailboxLight } from 'react-icons/pi';
import type { IconType } from 'react-icons';
import { Window } from '../../../assets/icons/Window';
import { freeServices } from '../../../data/services';
import './Services.css';
import ServicesCards from '../../../components/ServicesCards/ServicesCards';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

function Services() {
  const serviceIcons: Record<string, IconType> = {
    Courrier: PiMailboxLight,
    Plantes: PiPottedPlantDuotone,
    Volets: Window,
  };
  return (
    <>
      <section className="services-section ">
        <div className="container">
          <SectionHeader
            eyebrow="Mes services"
            title="Tout ce dont votre compagnon a besoin"
            text="Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer."
          />
          <ServicesCards showFeatures={false} showLink={true} />
        </div>
      </section>

      <section className="services-section free-services">
        <div className="container">
          <SectionHeader
            eyebrow="Inclus Gratuitement"
            eyebrowClassName="fs-eyebrow"
            title="Je veille aussi sur votre maison"
            titleClassName="fs-title"
            text="Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer."
            textClassName="fs-text"
          />
          <div className="services-cards fs-cards">
            {freeServices.map((freeService) => {
              const Icon = serviceIcons[freeService.title];
              return (
                <article className="service-card card fs-card" key={freeService.title}>
                  <div className="service-icon fs-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-blanc service-title">{freeService.title}</h3>
                  <p className="text-blanc service-desc ">{freeService.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
