import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

import './HomeParge.css'

function HomePage() {
  return (
  <main>
    <Hero />
    <Services/>
    <About/>
    <Contact/>
  </main>
);
}
export default HomePage;
