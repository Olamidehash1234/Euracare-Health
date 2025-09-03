import Hero from './hero'
import Choose from './choose'
import BeforeYourVisit from './beforeVisit';
import DuringYourVisit from './duringVisit';
import LiaisonOfficer from './liason';
import Tabs from './tabs'
import StickyJourney from '../../../components/StickyJourney';

export default function WhatToExpect() {
  return (
    <div className="">
      <Hero />
      <Choose />
      <BeforeYourVisit />
      <DuringYourVisit />
      <LiaisonOfficer />
      <Tabs />
      <StickyJourney />
    </div>
  );
}
