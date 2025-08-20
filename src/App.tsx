import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consult from './pages/Consultation'
// import PatientPortal from './pages/patientPortal'
import FindDoctor from './pages/FindDoctor';
// import FeedbackForm from './pages/feedbackform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Consult />} />
          {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
          {/* <Route path="/patient-portal" element={<PatientPortal />} /> */}
          <Route path="/doctors" element={<FindDoctor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
