import React from 'react';
import Hero from '../components/hero/Hero';
import InfoSection from '../components/info/InfoSection';
import Service from '../components/service/Service';
import ActionCall from '../components/action/ActionCall';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <Service />
      <ActionCall />
    </>
  );
};

export default Home;
