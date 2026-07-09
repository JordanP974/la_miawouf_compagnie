import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { contact } from '../../data/contact';
import './Contact.css';
import { NavLink } from 'react-router-dom';

const contactIcons: Record<string, IconType> = {
  'téléphone': FaPhone,
  'email': FaEnvelope,
  'secteur': FaMapMarkerAlt,
  'facebook': FaFacebook,
};

function Contact() {
  const tel = contact.find(c => c.label === "téléphone")
  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="section-content ">
          <span className="eyebrow contact-eyebrow">Contact</span>
          <h2 className="section-title contact-title">Réservez la garde de votre animal</h2>
          <p className="section-text contact-text">
            Une question, un devis, une réservation ? Contactez-moi, je vous réponds avec plaisir.
          </p>
          <div className="contact-btns ">
            <NavLink to={'/contact'} className={'btn-reserve btn-dark'}>
              Demander un devis
            </NavLink>
            <NavLink to={tel?.href ?? '#'} className={'btn-tel btn-light'}>
              {tel?.content}
            </NavLink>
          </div>
        </div>
        <div className="contact-infos">
          <ul>
            {contact.map((c) => {
              const Icon = contactIcons[c.label];
              const isExternal = c.label === 'facebook';
              return (
                <li key={c.label} className="contact-info-item">
                  <span className="contact-info-icon">
                    <Icon size={18} />
                  </span>
                  <div className="contact-info-text">
                    <p className="contact-info-label">{c.label}</p>
                    <a
                      href={c.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {c.content}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
