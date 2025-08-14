import HeroSection from './hero';
import Welcome from './welcome'
import Partner from './partners';
// import ServicesPage from './services';
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
        {/* <ServicesPage />
        <TestimonialPage />
        <FAQ/>
        <Partners />
        <Feedback /> */}
    </div>
  );
};

export default Homepage;
