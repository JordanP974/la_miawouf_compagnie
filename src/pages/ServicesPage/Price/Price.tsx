import { NavLink } from 'react-router-dom';
import { contact } from '../../../data/contact';
import "./Price.css"

function Price() {
  const tel = contact.find((c) => c.label === 'téléphone');
  return (
    <section className="price">
      <div className="container price-container">
        <div className="section-content ">
          <span className="eyebrow price-eyebrow">Tarif</span>
          <h2 className="section-title price-title">Un devis gratuit et personnalisé</h2>
          <p className="section-text price-text">
            Des tarifs à partir de 20€, adaptés à la durée et à la fréquence de chaque garde. Contactez-moi pour une estimation claire et sans engagement — les services maison sont toujours inclus gratuitement. 
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
      </div>
    </section>
  );
}

export default Price;
