import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { PiHouseLine, PiPawPrintFill, PiHeartStraight,PiPottedPlantDuotone, PiMailboxLight    } from 'react-icons/pi';
import type { IconType } from 'react-icons';
import { Window } from '../../assets/icons/Window';
import { services, freeServices } from '../../data/services';
import './Services.css';

interface ServicesProps {
  showFeatures?: boolean;
}



function Services({ showFeatures = false }: ServicesProps) {
  const serviceIcons: Record<string, IconType> = {
    'Garde à domicile': PiHouseLine,
    "Promenade": PiPawPrintFill,
    'Visites & NAC': PiHeartStraight ,
    'Courrier':PiMailboxLight ,
    'Plantes':PiPottedPlantDuotone ,
    'Volets': Window,
  };
  return (
    <>
    <section className="services-section ">
      <div className="section-content">
        <span className="eyebrow">Nos services</span>
        <h2 className="section-title">Tout ce dont votre compagnon a besoin</h2>
        <p className="section-text">
          Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer.
        </p>
      </div>

      <div className="services-cards">
        {services.map((service) => {
          const Icon = serviceIcons[service.title];
          return (
            <article className="service-card card" key={service.title}>
              <div className="service-icon">
                <Icon size={22} />
              </div>
              <h3 className="text-bordeaux service-title">{service.title}</h3>
              <p className="text-gris service-desc">{service.description}</p>
              {showFeatures && (
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle size={14} color={'var(--rose)'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <NavLink to={'/services'} className="service-link">
                En savoir plus <FaArrowRightLong />
              </NavLink>
            </article>
          );
        })}
      </div>
    </section>

    <section className="services-section free-services">
      <div className="section-content">
        <span className="eyebrow fs-eyebrow">Inclus Gratuitement</span>
        <h2 className="section-title fs-title">Je veille aussi sur votre maison</h2>
        <p className="section-text fs-text">
          Sans supplément, pendant chaque garde à votre domicile.
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
    </section>
    </>
  );
}

export default Services;
