import { engagements } from "../../../data/skills";
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import "./Engagements.css"

function Engagements() {
  return (
    <div className="engagements-container ">
      <SectionHeader eyebrow="mes engagements" title="Ce sur quoi vous pouvez compter" className="container" />
      <div className="engagements-cards">
        {engagements.map((e) => (
          <article className="engagement-card" key={e.title}>
            <span className="icon-engagement"></span>
            <h3 className="title-engagement">{e.title}</h3>
            <p className="description-engagement">{e.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Engagements;
