import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { useInView } from '../hooks/useInView';

// REPLACE: Replace with actual company photography
const PAGE_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format&fit=crop';
const IMG_VISION  = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop';

const PageHero: React.FC = () => (
  <section
    className="relative min-h-[45vh] flex items-end bg-bi-black overflow-hidden"
    aria-label="About Us page header"
  >
    <div className="absolute inset-0 z-0">
      <img
        src={PAGE_IMAGE}
        alt="BI Holding Group headquarters"
        className="w-full h-full object-cover object-center opacity-20"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, #0B0B0B 0%, transparent 60%)' }}
        aria-hidden="true"
      />
    </div>
    {/* Left red accent */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-bi-red z-10" style={{ left: '5.5%' }} aria-hidden="true" />
    <div className="relative z-10 container-bi pb-16 pt-40">
      <SectionLabel label="About BI Holding Group" className="mb-6" />
      <h1
        className="font-display font-extrabold uppercase text-bi-white leading-[0.92]"
        style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
      >
        A Diversified Group
        <br />
        With a <span className="text-bi-red">Long-Term</span> Vision.
      </h1>
    </div>
  </section>
);

const missionItems = [
  { title: 'Our Vision',   body: 'To become a recognized and trusted investment group, building a diversified portfolio of businesses and assets while contributing to the development of the industries in which we operate.' },
  { title: 'Our Mission',  body: 'To build, develop and manage a diversified portfolio of business interests that generate sustainable value across multiple economic sectors, guided by strategic insight and long-term thinking.' },
  { title: 'Our Strategy', body: 'We combine financial discipline with entrepreneurial vision — identifying high-potential opportunities, fostering meaningful partnerships and investing in businesses built to last.' },
];

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLDivElement>, { threshold: 0.12 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <main id="main-content">
      <PageHero />

      {/* Intro */}
      <section className="bg-bi-black py-20 lg:py-32" aria-labelledby="about-intro-heading">
        <div className="container-bi">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <Section>
                <h2
                  id="about-intro-heading"
                  className="font-display font-bold uppercase text-bi-white leading-[0.95] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  Investment. Development.
                  <br />
                  <span className="text-bi-muted">Management.</span>
                </h2>
                <div className="space-y-5">
                  <p className="text-bi-muted-lt text-[15px] leading-relaxed">
                    BI Holding Group is an investment holding company established with the objective
                    of building, developing and managing a diversified portfolio of business interests
                    across different economic sectors.
                  </p>
                  <p className="text-bi-muted text-[15px] leading-relaxed">
                    Our activities span a range of industries, allowing us to pursue opportunities across
                    established markets and emerging business fields. We take a long-term approach to
                    investment, focusing on businesses and projects with solid fundamentals, development
                    potential and the ability to generate sustainable value.
                  </p>
                  <p className="text-bi-muted text-[15px] leading-relaxed">
                    Through a combination of strategic investments, entrepreneurial vision and operational
                    expertise, we develop and support businesses with the ambition to create lasting value
                    for all our stakeholders.
                  </p>
                </div>
              </Section>
            </div>

            {/* Image */}
            <div className="lg:col-span-5">
              <Section>
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-bi-red z-10" aria-hidden="true" />
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-bi-border z-10" aria-hidden="true" />
                  <img
                    src={IMG_VISION}
                    alt="Strategic business planning and investment"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Strategy */}
      <section className="bg-bi-darker py-20 lg:py-28" aria-labelledby="vision-heading">
        <div className="container-bi">
          <Section className="mb-14">
            <SectionLabel label="Vision &amp; Strategy" className="mb-6" />
            <div className="flex items-center gap-4" aria-hidden="true">
              <span className="block w-12 h-px bg-bi-red" />
              <span className="block flex-1 h-px bg-bi-border" />
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {missionItems.map((item, idx) => (
              <Section key={item.title}>
                <div className={`py-10 ${idx > 0 ? 'md:pl-10 md:border-l md:border-bi-border' : ''} pr-8`}>
                  <span className="block w-6 h-0.5 bg-bi-red mb-6" aria-hidden="true" />
                  <h3 className="font-display font-bold uppercase text-bi-white text-2xl tracking-wide mb-5">
                    {item.title}
                  </h3>
                  <p className="text-bi-muted text-[14px] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Section>
            ))}
          </div>
          <div className="h-px bg-bi-border mt-0" aria-hidden="true" />
        </div>
      </section>

      {/* Values brief */}
      <section className="bg-bi-black py-20" aria-labelledby="values-brief-heading">
        <div className="container-bi">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
              <div className="lg:col-span-5">
                <SectionLabel label="Our Values" className="mb-6" />
                <h2
                  id="values-brief-heading"
                  className="font-display font-bold uppercase text-bi-white leading-[0.95]"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
                >
                  The Values That
                  <br />
                  Guide Everything We Do
                </h2>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-2 gap-4" role="list">
                  {[
                    'Integrity and Transparency',
                    'Strategic Thinking',
                    'Entrepreneurial Spirit',
                    'Innovation and Adaptability',
                    'Long-Term Commitment',
                    'Excellence in Execution',
                  ].map((v) => (
                    <li key={v} className="flex items-center gap-3 text-bi-muted-lt text-sm py-3 border-b border-bi-border">
                      <span className="block w-4 h-px bg-bi-red flex-shrink-0" aria-hidden="true" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-bi-red py-16" aria-label="Call to action">
        <div className="container-bi flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold uppercase text-white text-3xl leading-tight">
              Ready to Discuss an Opportunity?
            </h2>
            <p className="mt-2 text-white/80 text-sm">
              We welcome conversations with potential partners, clients and investors.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-bi-red font-body font-semibold text-sm px-7 py-3 hover:bg-bi-white/90 transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
