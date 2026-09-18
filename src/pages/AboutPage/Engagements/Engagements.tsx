import { engagements } from '../../../data/skills';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import './Engagements.css';

function Engagements() {
  return (
    <div className="engagements-container container">
      <SectionHeader eyebrow="mes engagements" title="Ce sur quoi vous pouvez compter" />
      <div className="engagements-cards">
        {engagements.map(({ title, description, icon: Icon }) => (
          <article className="engagement-card" key={title}>
            <span className="icon-engagement" aria-hidden="true">
              <Icon size={20} />
            </span>
            <h3 className="title-engagement">{title}</h3>
            <p className="description-engagement">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Engagements;
