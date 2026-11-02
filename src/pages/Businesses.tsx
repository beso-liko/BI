import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Cpu, BarChart3, Truck, TrendingUp, ArrowRight } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { useInView } from '../hooks/useInView';

// REPLACE: Replace with actual sector photography
const sectors = [
  {
    id:       'real-estate',
    icon:     Building2,
    number:   '01',
    title:    'Real Estate',
    tagline:  'Property development, acquisition & asset management.',
    image:    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Urban real estate development and property portfolio',
    body: [
      'We pursue investment opportunities in the real estate sector, focusing on property development, acquisition, management and strategic real estate projects.',
      'Our objective is to build and manage assets that offer long-term value and contribute to the development of modern and sustainable environments.',
      'We evaluate real estate projects across residential, commercial and mixed-use categories with an emphasis on locations with strong development potential.',
    ],
    highlights: ['Property Development', 'Acquisition & Management', 'Strategic Real Estate Projects', 'Long-Term Asset Value'],
  },
  {
    id:       'information-technology',
    icon:     Cpu,
    number:   '02',
    title:    'Information Technology',
    tagline:  'Digital solutions & technology-driven business innovation.',
    image:    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Technology infrastructure and digital innovation',
    body: [
      'We recognize technology as a key driver of business transformation and economic growth.',
      'Our interests in the IT sector focus on digital solutions, technology-driven businesses and innovative services that support efficiency, connectivity and future development.',
      'We actively seek to invest in and support companies that harness technology to solve real-world business problems at scale.',
    ],
    highlights: ['Digital Solutions', 'Technology-Driven Businesses', 'Innovative Services', 'Business Transformation'],
  },
  {
    id:       'consulting',
    icon:     BarChart3,
    number:   '03',
    title:    'Consulting & Business Services',
    tagline:  'Strategic insight, operational expertise & advisory.',
    image:    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Business consulting and strategic advisory services',
    body: [
      'We are involved in business consulting and professional services, supporting organizations through strategic insight, operational expertise and business development solutions.',
      'We believe in helping businesses improve performance, adapt to changing markets and identify new opportunities.',
      'Our consulting activities create additional value across our portfolio by providing expertise that strengthens operations and accelerates growth.',
    ],
    highlights: ['Strategic Advisory', 'Operational Improvement', 'Business Development', 'Market Adaptation'],
  },
  {
    id:       'distribution',
    icon:     Truck,
    number:   '04',
    title:    'Distribution & Trade',
    tagline:  'Commercial networks, logistics & supply chain solutions.',
    image:    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Logistics and distribution operations',
    body: [
      'Our distribution activities focus on connecting products, markets and business partners through efficient commercial networks and reliable supply solutions.',
      'We aim to develop strong market relationships and create value through effective distribution strategies and operational excellence.',
      'We target distribution businesses with scalable models, established supplier relationships and clear pathways to market expansion.',
    ],
    highlights: ['Commercial Networks', 'Supply Solutions', 'Market Relationships', 'Operational Excellence'],
  },
];

const SectorBlock: React.FC<{ sector: typeof sectors[0]; reverse?: boolean }> = ({ sector, reverse = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLDivElement>, { threshold: 0.1 });
  const Icon = sector.icon;

  return (
    <div
      ref={ref}
      id={sector.id}
      className="py-20 lg:py-28 border-b border-bi-border last:border-0 scroll-mt-18"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image */}
        <div
          className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-bi-red z-10" aria-hidden="true" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-bi-border z-10" aria-hidden="true" />
            <img
              src={sector.image}
              alt={sector.imageAlt}
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-bi-muted">
                {sector.number}
              </span>
              <span className="block h-px w-8 bg-bi-red flex-shrink-0" aria-hidden="true" />
              <span
                className="flex w-9 h-9 items-center justify-center border border-bi-red/40 text-bi-red"
                aria-hidden="true"
              >
                <Icon size={16} />
              </span>
            </div>

            <h2
              className="font-display font-bold uppercase text-bi-white leading-[0.95] mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {sector.title}
            </h2>
            <p className="font-body text-bi-muted text-sm mb-7 leading-snug">
              {sector.tagline}
            </p>

            <div className="space-y-4 mb-8">
              {sector.body.map((para, i) => (
                <p key={i} className="text-bi-muted text-[14px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-2" role="list" aria-label={`${sector.title} highlights`}>
              {sector.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-[13px] text-bi-muted-lt">
                  <span className="block w-3 h-px bg-bi-red flex-shrink-0" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Businesses: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main id="main-content">
      {/* Page hero */}
      <section
        ref={heroRef}
        className="relative min-h-[45vh] flex items-end bg-bi-black overflow-hidden"
        aria-label="Our Businesses page header"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format&fit=crop"
            alt="Business portfolio overview"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0B0B0B 0%, transparent 60%)' }} aria-hidden="true" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-bi-red z-10" style={{ left: '5.5%' }} aria-hidden="true" />
        <div className="relative z-10 container-bi pb-16 pt-40">
          <SectionLabel label="Portfolio &amp; Operations" className="mb-6" />
          <h1
            className="font-display font-extrabold uppercase text-bi-white leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            Diverse Investments.
            <br />
            <span className="text-bi-red">Shared Ambition.</span>
          </h1>
          <p className="mt-6 text-bi-muted-lt text-[15px] leading-relaxed max-w-xl">
            Our portfolio spans four core sectors, each selected for its long-term
            growth potential and strategic fit within our diversified group.
          </p>
        </div>
      </section>

      {/* Sector blocks */}
      <section className="bg-bi-black" aria-label="Business sectors detail">
        <div className="container-bi">
          {sectors.map((sector, idx) => (
            <SectorBlock key={sector.id} sector={sector} reverse={idx % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Other investments */}
      <section className="bg-bi-darker py-20" aria-labelledby="other-investments-heading">
        <div className="container-bi">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2 flex items-center justify-center">
              <span
                className="flex w-16 h-16 items-center justify-center border border-bi-border text-bi-muted"
                aria-hidden="true"
              >
                <TrendingUp size={24} />
              </span>
            </div>
            <div className="lg:col-span-10">
              <h2
                id="other-investments-heading"
                className="font-display font-bold uppercase text-bi-white text-3xl mb-3"
              >
                Other Strategic Investments
              </h2>
              <p className="text-bi-muted text-[15px] leading-relaxed max-w-2xl mb-6">
                Beyond our four core sectors, we remain open to investment opportunities
                in other industries with attractive growth prospects and strong long-term potential.
                We continuously evaluate new opportunities that align with our investment philosophy
                and strategic objectives.
              </p>
              <Link to="/contact" className="btn-outline-red">
                Discuss an Opportunity
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Businesses;
