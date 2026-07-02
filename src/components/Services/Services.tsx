import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "../../data/services";

function Services() {
  return(
  <section className="section-content">
    <h3 className="section-title">NOS SERVICES</h3>
    <h2 className="section-title">Tout ce dont votre compagnon a besoin</h2>
    <p>Des prestations adaptées à chaque animal et à chaque besoin, toujours dans le confort de son foyer.</p>
    {services.map((service)=> (
      <article className="services-cards">
      <h3 className="text-bordeaux">{service.title}</h3>
      <p className="text-gris ">{service.description}</p>
      <NavLink to={"/services"}>En savoir plus <FaArrowRightLong /></NavLink>
      </article>))}
    
  </section>
  )
}

export default Services;