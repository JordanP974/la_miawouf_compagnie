import { steps } from '../../../data/services';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import './Steps.css';

function Steps() {
  return (
    <div className="step-container ">
      <SectionHeader eyebrow="Comment ça marche" title="Simple, en 4 étapes" className="container" />
      <div className="steps-cards">
        {steps.map((step, index) => (
          <article className="step-card" key={index}>
            <span className="number-step">{index + 1}</span>
            <h3 className="title-step">{step.title}</h3>
            <p className="description-step">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Steps;
