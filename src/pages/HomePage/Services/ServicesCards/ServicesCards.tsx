import { PiHeartStraight, PiHouseLine, PiMailboxLight, PiPawPrintFill, PiPottedPlantDuotone } from 'react-icons/pi';
import { services } from '../../../../data/services';
import type { IconType } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import imgPromenade from '../../../../assets/promenade.jpg';
import imgDom from '../../../../assets/garde.jpg';

interface ServicesCardsProps {
  showFeatures?: boolean;
  showLink?: boolean;
  showImg?: boolean
}

function ServicesCards({ showFeatures, showLink, showImg }: ServicesCardsProps) {
  const serviceIcons: Record<string, IconType> = {
    'Garde à domicile': PiHouseLine,
    Promenade: PiPawPrintFill,
    'Visites & NAC': PiHeartStraight,
  };

  const serviceImg: Record<string, string> = {
    'Garde à domicile': imgDom,
    Promenade: imgPromenade,
  };
  return (
    <div className="services-cards">
      {services.map((service) => {
        const Icon = serviceIcons[service.title];
        return (
          <article className="service-card card" key={service.title}>
            {showImg ? (<img src={serviceImg[service.title]} alt="" />) : (<div className="service-icon">
              <Icon size={22} />
            </div>) }
            
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
            {showLink && (<NavLink to={'/services'} className="service-link">
              En savoir plus <FaArrowRightLong />
            </NavLink>)}
          </article>
        );
      })}
    </div>
  );
}

export default ServicesCards;
