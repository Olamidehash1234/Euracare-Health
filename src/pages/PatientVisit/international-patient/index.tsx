import Hero from './hero';  
import Choose from './choose'
import Planning from './planningVisit'
import InternationalPatients from './InterPatientServices';
import Travelling from './travelling'
import StickyJourney from '../../../components/StickyJourney';

export default function InternationalPatient() {
  return (
    <div>
      <Hero />
      <Choose />
      <Planning />
      <InternationalPatients />
      <Travelling />
      <StickyJourney />
    </div>
  );
}
