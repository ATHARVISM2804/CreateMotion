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
      <div id="home" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <Hero />
      </div>
      <div id="work" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <SelectedEdits />
        <ShortformShowcase />
        <ThumbnailDesigns />
      </div>
      <div id="about" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <About />
        <Team />
      </div>
      <div id="services" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <Services />
        <Workflow />
      </div>
      <Testimonials />
      <FAQ />
      <div id="pricing" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <Pricing />
      </div>
      <div id="contact" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <Contact />
      </div>
    </div>
  );
}

export default App;
