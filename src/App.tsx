import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consult from './pages/Consultation'
import EnquiryPage from './pages/Enquiry';
import FindDoctor from './pages/FindDoctor';
import ServiceDynamicPage from './pages/Services/dynamic/[slug]';
import DoctorProfilePage from './pages/Doctor/[id]';
import Expect from './pages/PatientVisit/what-to-expect'
import International from './pages/PatientVisit/international-patient'
import NewsFullPage from './pages/Home/news-full';
import NotFound from './pages/NotFound';
import Careers from './pages/Career'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<About scrollToTeam={true} />} />
          <Route path="/about/ourteam" element={<About scrollToTeam={true} />} />
          <Route path="/about/vision-mission" element={<About scrollToMission={true} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Consult />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/patient-information/what-to-expect" element={<Expect />} />
          <Route path="/patient-information/international-patients" element={<International />} />
          <Route path="/doctors" element={<FindDoctor />} />
          <Route path="/Doctors-Profile/:id" element={<DoctorProfilePage />} />
          <Route path="/services/dynamic/:slug" element={<ServiceDynamicPage />} />
          <Route path="/home/news" element={<NewsFullPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
