import { steps } from '../../../data/services';
import './Steps.css';

function Steps() {
  return (
    <div className="step-container ">
      <div className="section-content container">
        <span className="eyebrow">Comment ça marche</span>
        <h2 className="section-title">Simple, en 4 étapes</h2>
      </div>
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
