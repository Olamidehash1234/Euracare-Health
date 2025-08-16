import HeroSection from './hero';
import Welcome from './welcome'
import Partner from './partners';
import ServicesPage from './service';
// import TestimonialPage from './testimonial';
// import FAQ from './FAQ'
// import Partners from './partners'
// import Feedback from './feedback'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Welcome />
        <Partner />
        <ServicesPage />
    </div>
  );
};

export default Homepage;
