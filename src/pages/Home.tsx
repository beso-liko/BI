import React from 'react';
import Hero from '../components/sections/Hero';
import Overview from '../components/sections/Overview';
import BusinessSectors from '../components/sections/BusinessSectors';
import Philosophy from '../components/sections/Philosophy';
import WhyBI from '../components/sections/WhyBI';
import ContactBanner from '../components/sections/ContactBanner';

const SECTORS = ['Real Estate', 'Information Technology', 'Consulting', 'Distribution', 'Strategic Investments'];

/* Full-bleed outlined ticker — two identical copies make the -50% loop seamless */
const SectorFrieze: React.FC = () => (
  <div
    className="bg-bi-black border-y border-bi-border overflow-hidden py-6 md:py-8 select-none"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center">
          {SECTORS.map((sector) => (
            <li
              key={sector}
              className="flex items-center whitespace-nowrap font-display font-extrabold uppercase leading-none tracking-[-0.01em] text-[clamp(2.25rem,6.5vw,5.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(245,245,245,0.35)]"
            >
              {sector}
              <span className="mx-8 md:mx-12 block size-2 md:size-3 rotate-45 bg-bi-red" />
            </li>
          ))}
        </ul>
      ))}
    </div>
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
