import HeroSection from './hero';
import Welcome from './welcome'
import Partner from './partners';
import ServicesPage from './service';
import Doctors from './doctors';
import TestimonialsSec from './testimonials'
// import Partners from './partners'
// import Feedback from './feedback'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Welcome />
        <Partner />
        <ServicesPage />
        <Doctors />
        <TestimonialsSec />
    </div>
  );
};

export default Homepage;
