import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import SelectedEdits from './components/SelectedEdits';
import ShortformShowcase from './components/ShortformShowcase';
import ThumbnailDesigns from './components/ThumbnailDesigns';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black bg-opacity-50 overflow-x-hidden relative">
      <BackgroundAnimation />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="work">
        <SelectedEdits />
        <ShortformShowcase />
        <ThumbnailDesigns />
      </div>
      <div id="about">
        <About />
        <Team />
      </div>
      <div id="services">
        <Services />
        <Workflow />
      </div>
      <Testimonials />
      <FAQ />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
