import Hero from './hero'
import Choose from './choose'
import BeforeYourVisit from './beforeVisit';
import DuringYourVisit from './duringVisit';
import LiaisonOfficer from './liason';
import Tabs from './tabs'

export default function WhatToExpect() {
  return (
    <div>
      <Hero />
      <Choose />
      <BeforeYourVisit />
      <DuringYourVisit />
      <LiaisonOfficer />
      <Tabs />
    </div>
  );
}
