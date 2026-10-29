import React from 'react';
import Hero from '../components/sections/Hero';
import Overview from '../components/sections/Overview';
import BusinessSectors from '../components/sections/BusinessSectors';
import Philosophy from '../components/sections/Philosophy';
import WhyBI from '../components/sections/WhyBI';
import ContactBanner from '../components/sections/ContactBanner';

/* Full-bleed typographic frieze — sector names at editorial scale */
const SectorFrieze: React.FC = () => (
  <div
    className="bg-bi-black border-t border-b border-bi-border overflow-hidden py-7"
    aria-hidden="true"
  >
    <p
      className="font-display font-extrabold uppercase whitespace-nowrap select-none"
      style={{
        fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
        lineHeight: 1,
        color: 'rgba(255,255,255,0.06)',
        letterSpacing: '-0.01em',
        paddingInline: '4rem',
      }}
    >
      Real&nbsp;Estate&emsp;·&emsp;Information&nbsp;Technology&emsp;·&emsp;Consulting&emsp;·&emsp;Distribution&emsp;·&emsp;Strategic&nbsp;Investments
    </p>
  </div>
);

const Home: React.FC = () => {
  return (
    <main id="main-content">
      <Hero />
      <Overview />
      <SectorFrieze />
      <BusinessSectors />
      <Philosophy />
      <WhyBI />
      <ContactBanner />
    </main>
  );
};

export default Home;
