import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Services from './Services/Services';

import './HomeParge.css';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
export default HomePage;
