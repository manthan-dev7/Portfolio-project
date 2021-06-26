import About from '../container/About';
import Services from '../container/Services';
import Contact from '../container/Contact';
import Footer from '../component/Footer';
import Home from '../container/Home';
import Testimonial from '../container/Testimonial';
import Portfolio from '../container/Portfolio';
import Education from '../container/Education';
import Blog from '../container/Blog';

export default function Main() {
  return (
    <div>
      <div className="light-theme">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
