import React, { useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { useInView } from '../../hooks/useInView';

const principles = [
  {
    number: '01',
    title:  'Long-Term Value Creation',
    body:   'We focus on sustainable development and investments that generate value over time — not short-term gains. Every decision is measured against its ability to create durable, compounding returns for our portfolio and partners.',
  },
  {
    number: '02',
    title:  'Diversification',
    body:   'We pursue opportunities across different sectors and markets, creating a balanced portfolio with multiple avenues for growth. Diversification is our structural advantage — reducing risk while expanding opportunity.',
  },
  {
    number: '03',
    title:  'Strategic Partnerships',
    body:   'We value strong relationships with business partners, clients and stakeholders, recognizing that collaboration is an important driver of success. We invest in people and organizations, not just assets.',
  },
];

const Philosophy: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #141414 0%, #160d0d 60%, #150e0e 100%)' }}
      aria-labelledby="philosophy-heading"
    >
      <div className="container-bi">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <SectionLabel number="03" label="Investment Philosophy" className="mb-8" />
            </div>
            <h2
              id="philosophy-heading"
              className={`font-display font-bold uppercase text-bi-white leading-[0.95] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', transitionDelay: '120ms' }}
            >
              How We Think
              <br />
              About{' '}
              Investment
            </h2>
          </div>
          <div className="lg:col-span-7 lg:flex lg:items-end">
            <p className={`text-bi-muted text-[15px] leading-relaxed max-w-lg transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '240ms' }}>
              Successful investments are built on strategic vision, sound decision-making
              and strong partnerships. Our investment philosophy is guided by three
              fundamental principles.
            </p>
          </div>
        </div>

        {/* Three principles — editorial horizontal rows */}
        <div className="relative">
          {/* Top border */}
          <div
            className={`h-px bg-bi-border transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
            aria-hidden="true"
          />

          <div>
            {principles.map((p, idx) => (
              <div
                key={p.number}
                className={`grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-8 py-12 border-b border-bi-border transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${350 + idx * 120}ms` }}
              >
                {/* Number */}
                <div className="md:col-span-1 flex items-start pt-1">
                  <span className="font-display font-bold text-sm text-bi-muted tracking-wider">
                    {p.number}
                  </span>
                </div>

                {/* Red tick + title */}
                <div className="md:col-span-4">
                  <span className="block w-8 h-0.5 bg-bi-red mb-6" aria-hidden="true" />
                  <h3 className="font-display font-bold uppercase text-bi-white text-2xl leading-tight tracking-wide">
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="md:col-span-7 md:pl-6 flex items-start">
                  <p className="font-body text-[14px] text-bi-muted leading-relaxed pt-1">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Quote band */}
        <div
          className={`mt-16 p-10 border border-bi-border bg-bi-black/50 relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Large decorative quote mark */}
          <span
            className="absolute -top-4 left-8 font-display font-extrabold text-bi-border/40 leading-none select-none pointer-events-none"
            style={{ fontSize: '10rem' }}
            aria-hidden="true"
          >
            "
          </span>
          <blockquote className="relative z-10 max-w-3xl">
            <p className="font-display font-semibold uppercase text-bi-white leading-snug"
               style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>
              We believe that financial discipline, combined with a long-term perspective,
              unlocks opportunities and creates value across every industry we touch.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-bi-red" aria-hidden="true" />
              <cite className="font-body text-sm text-bi-muted not-italic tracking-wide">
                BI Holding Group — Investment Philosophy
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
