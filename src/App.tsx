import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consult from './pages/Consultation'
import EnquiryPage from './pages/Enquiry';
import FindDoctor from './pages/FindDoctor';
// import FeedbackForm from './pages/feedbackform';
import ServiceDynamicPage from './pages/Services/dynamic/[slug]';
import DoctorProfilePage from './pages/Doctor/[id]';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Consult />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          {/* <Route path="/patient-portal" element={<PatientPortal />} /> */}
          <Route path="/doctors" element={<FindDoctor />} />
          <Route path="/Doctors-Profile/:id" element={<DoctorProfilePage />} />
          <Route path="/services/dynamic/:slug" element={<ServiceDynamicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
