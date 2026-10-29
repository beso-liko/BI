import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { useInView } from '../../hooks/useInView';

/* ── Custom geometric sector icons ── */
const RealEstateIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" aria-hidden="true">
    <polyline points="1,12 9,2 17,12" />
    <polyline points="4,12 4,17 14,17 14,12" />
    <rect x="7" y="12" width="4" height="5" />
  </svg>
);

const ITIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" aria-hidden="true">
    <rect x="1" y="1" width="6" height="6" />
    <rect x="11" y="1" width="6" height="6" />
    <rect x="1" y="11" width="6" height="6" />
    <rect x="11" y="11" width="6" height="6" />
    <line x1="7" y1="4" x2="11" y2="4" />
    <line x1="7" y1="14" x2="11" y2="14" />
    <line x1="4" y1="7" x2="4" y2="11" />
    <line x1="14" y1="7" x2="14" y2="11" />
  </svg>
);

const ConsultingIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" aria-hidden="true">
    <line x1="1" y1="17" x2="17" y2="17" />
    <rect x="1" y="11" width="4" height="6" />
    <rect x="7" y="7" width="4" height="10" />
    <rect x="13" y="2" width="4" height="15" />
  </svg>
);

const DistributionIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" aria-hidden="true">
    <polygon points="9,1 17,9 9,17 1,9" />
    <line x1="9" y1="1" x2="9" y2="17" />
    <line x1="1" y1="9" x2="17" y2="9" />
  </svg>
);

// REPLACE: Sector images with actual company/sector photography
const sectors = [
  {
    id:          'real-estate',
    number:      '01',
    Icon:        RealEstateIcon,
    title:       'Real Estate',
    short:       'Property development, acquisition & management.',
    description: 'We pursue investment opportunities in the real estate sector, focusing on property development, acquisition, management and strategic real estate projects. Our objective is to build and manage assets that offer long-term value and contribute to the development of modern and sustainable environments.',
    image:       'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&auto=format&fit=crop',
    imageAlt:    'Modern urban real estate development',
  },
  {
    id:          'information-technology',
    number:      '02',
    Icon:        ITIcon,
    title:       'Information Technology',
    short:       'Digital solutions & technology-driven businesses.',
    description: 'We recognize technology as a key driver of business transformation and economic growth. Our interests in the IT sector focus on digital solutions, technology-driven businesses and innovative services that support efficiency, connectivity and future development.',
    image:       'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop',
    imageAlt:    'Technology infrastructure and digital solutions',
  },
  {
    id:          'consulting',
    number:      '03',
    Icon:        ConsultingIcon,
    title:       'Consulting & Business Services',
    short:       'Strategic insight & operational expertise.',
    description: 'We are involved in business consulting and professional services, supporting organizations through strategic insight, operational expertise and business development solutions. We believe in helping businesses improve performance, adapt to changing markets and identify new opportunities.',
    image:       'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop',
    imageAlt:    'Strategic business consulting and advisory services',
  },
  {
    id:          'distribution',
    number:      '04',
    Icon:        DistributionIcon,
    title:       'Distribution & Trade',
    short:       'Commercial networks & reliable supply solutions.',
    description: 'Our distribution activities focus on connecting products, markets and business partners through efficient commercial networks and reliable supply solutions. We aim to develop strong market relationships and create value through effective distribution strategies and operational excellence.',
    image:       'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80&auto=format&fit=crop',
    imageAlt:    'Logistics and distribution network operations',
  },
];

interface SectorPanelProps {
  sector: typeof sectors[0];
  index: number;
  inView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const SectorPanel: React.FC<SectorPanelProps> = ({
  sector,
  index,
  inView,
  isExpanded,
  onToggle,
}) => {
  const Icon = sector.Icon;

  return (
    <div
      className={`group border-b border-bi-border transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Panel header — always visible */}
      <button
        className="w-full text-left py-7 flex items-center gap-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bi-red focus-visible:ring-offset-2 focus-visible:ring-offset-bi-black"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`sector-${sector.id}-body`}
      >
        {/* Number */}
        <span className="font-display font-bold text-sm text-bi-border group-hover:text-bi-muted transition-colors duration-200 w-8 flex-shrink-0">
          {sector.number}
        </span>

        {/* Icon */}
        <span
          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
            isExpanded
              ? 'border-bi-red bg-bi-red/10 text-bi-red'
              : 'border-bi-border text-bi-muted group-hover:border-bi-muted group-hover:text-bi-white'
          }`}
        >
          <Icon size={18} aria-hidden="true" />
        </span>

        {/* Title */}
        <div className="flex-1">
          <h3 className="font-display font-bold uppercase text-bi-white text-2xl md:text-3xl leading-none tracking-wide group-hover:text-bi-white transition-colors duration-200">
            {sector.title}
          </h3>
          <p className="mt-1 font-body text-sm text-bi-muted group-hover:text-bi-muted-lt transition-colors duration-200">
            {sector.short}
          </p>
        </div>

        {/* Expand icon */}
        <span
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
            isExpanded ? 'text-bi-red rotate-45' : 'text-bi-muted group-hover:text-bi-white'
          }`}
          aria-hidden="true"
        >
          <Plus size={18} />
        </span>
      </button>

      {/* Expandable body */}
      <div
        id={`sector-${sector.id}-body`}
        className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-8 flex flex-col md:flex-row gap-8 pl-14">
          {/* Description */}
          <div className="flex-1">
            <p className="text-bi-muted-lt text-[15px] leading-relaxed mb-6">
              {sector.description}
            </p>
            <Link
              to="/businesses"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-bi-red hover:text-bi-white transition-colors duration-200 group/link"
            >
              Learn More
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Image thumbnail */}
          <div className="md:w-48 flex-shrink-0">
            <img
              src={sector.image}
              alt={sector.imageAlt}
              className="w-full aspect-video md:aspect-square object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessSectors: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section
      id="sectors"
      ref={ref}
      className="bg-bi-darker py-24 lg:py-36 overflow-hidden"
      aria-labelledby="sectors-heading"
    >
      <div className="container-bi">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <SectionLabel number="02" label="Our Businesses" className="mb-8" />
            </div>
            <h2
              id="sectors-heading"
              className={`font-display font-bold uppercase text-bi-white leading-[0.95] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', transitionDelay: '120ms' }}
            >
              Diverse Investments.{' '}
              <span className="text-bi-muted">Shared Ambition.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <p className={`text-bi-muted text-[15px] leading-relaxed transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '240ms' }}>
              Our portfolio reflects our commitment to diversification and our
              ability to identify opportunities across a broad range of industries.
            </p>
          </div>
        </div>

        {/* Red separator */}
        <div
          className={`flex items-center gap-0 mb-0 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
          aria-hidden="true"
        >
          <span className="block w-16 h-px bg-bi-red" />
          <span className="block flex-1 h-px bg-bi-border" />
        </div>

        {/* Sector panels */}
        <div role="list" aria-label="Business sectors">
          {sectors.map((sector, idx) => (
            <SectorPanel
              key={sector.id}
              sector={sector}
              index={idx}
              inView={inView}
              isExpanded={expanded === sector.id}
              onToggle={() => toggle(sector.id)}
            />
          ))}
        </div>

        {/* "Other Investments" note */}
        <div
          className={`mt-10 p-6 border border-bi-border bg-bi-dark/50 flex items-center gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <span className="block w-px h-10 bg-bi-red flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-bi-muted mb-1">
              Other Strategic Investments
            </p>
            <p className="font-body text-sm text-bi-muted-lt">
              Beyond our core sectors, we remain open to investment opportunities
              in other industries with attractive growth prospects and strong long-term potential.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Link to="/businesses" className="btn-outline-red">
            View All Businesses
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
