import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { PiHouseLine, PiPawPrintFill, PiHeartStraight, PiPottedPlantDuotone, PiMailboxLight } from 'react-icons/pi';
import type { IconType } from 'react-icons';
import { Window } from '../../../assets/icons/Window';
import { services, freeServices } from '../../../data/services';
import './Services.css';
import ServicesCards from '../../../components/ServicesCards/ServicesCards';

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
          <div className="section-content">
            <span className="eyebrow">Mes services</span>
            <h2 className="section-title">Tout ce dont votre compagnon a besoin</h2>
            <p className="section-text">
              Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer.
            </p>
          </div>
          <ServicesCards showFeatures={false} showLink={true} />
        </div>
      </section>

      <section className="services-section free-services">
        <div className="container">
          <div className="section-content">
            <span className="eyebrow fs-eyebrow">Inclus Gratuitement</span>
            <h2 className="section-title fs-title">Je veille aussi sur votre maison</h2>
            <p className="section-text fs-text">
              Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer.
            </p>
          </div>
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
