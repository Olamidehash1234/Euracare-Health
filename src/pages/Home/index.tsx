import HeroSection from './hero';
import Welcome from './welcome'
import Partner from './partners';
import ServicesPage from './service';
import Doctors from './doctors';
import TestimonialsSec from './testimonials'
import NewsSection from './news'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Welcome />
        <Partner />
        <ServicesPage />
        <Doctors />
        <TestimonialsSec />
        <NewsSection />
    </div>
  );
};

export default Homepage;
