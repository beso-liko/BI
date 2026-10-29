import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { useInView } from '../../hooks/useInView';

const values = [
  { label: 'Integrity and Transparency',   desc: 'We conduct business with honesty and openness in all our dealings.' },
  { label: 'Strategic Thinking',           desc: 'Every decision is grounded in careful analysis and long-term perspective.' },
  { label: 'Entrepreneurial Spirit',       desc: 'We seek and support businesses with bold ideas and real potential.' },
  { label: 'Innovation and Adaptability',  desc: 'We embrace change and continuously evolve with the markets we serve.' },
  { label: 'Long-Term Commitment',         desc: 'We build relationships and businesses designed to last.' },
  { label: 'Excellence in Execution',      desc: 'We hold ourselves to the highest standard in everything we deliver.' },
];

// REPLACE: Use actual company photography — abstract architecture / boardroom
const WHYBI_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop';

const WhyBI: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.12 });

  return (
    <section
      id="why-bi"
      ref={ref}
      className="bg-bi-black py-24 lg:py-36 overflow-hidden"
      aria-labelledby="whybi-heading"
    >
      <div className="container-bi">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left — large image + headline */}
          <div className="lg:col-span-5 relative">
            {/* Background number */}
            <div
              className="absolute -bottom-4 -left-4 select-none pointer-events-none z-0"
              aria-hidden="true"
            >
              <span
                className="font-display font-extrabold text-bi-border/40 leading-none"
                style={{ fontSize: 'clamp(8rem, 16vw, 14rem)' }}
              >
                04
              </span>
            </div>

            {/* Image */}
            <div
              className={`relative z-10 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Corner accents */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-bi-red z-20"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-bi-muted z-20"
                aria-hidden="true"
              />
              <img
                src={WHYBI_IMAGE}
                alt="BI Holding Group — disciplined investment approach"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-bi-black/20" aria-hidden="true" />
            </div>

            {/* Floating label on image */}
            <div
              className={`absolute bottom-8 left-4 z-20 bg-bi-red px-5 py-3 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
              aria-hidden="true"
            >
              <p className="font-display font-bold text-white text-lg uppercase tracking-widest leading-none">
                Our Values
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-7 lg:pl-8 lg:pt-8">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <SectionLabel number="04" label="Why BI" className="mb-8" />
            </div>

            <h2
              id="whybi-heading"
              className={`font-display font-bold uppercase text-bi-white leading-[0.95] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', transitionDelay: '120ms' }}
            >
              The Principles That
              <br />
              Define How We{' '}
              <span className="italic font-normal text-bi-muted-lt">Work</span>
            </h2>

            <p className={`mt-7 text-bi-muted text-[15px] leading-relaxed max-w-lg transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '240ms' }}>
              Our approach is built on a clear set of values that guide every
              investment decision, partnership and business we develop.
            </p>

            {/* Spacer */}
            <div className="my-10" />

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {values.map((val, idx) => (
                <div
                  key={val.label}
                  className={`py-5 pr-6 border-b border-bi-border transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${idx % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:border-l sm:border-bi-border'}`}
                  style={{ transitionDelay: `${380 + idx * 60}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center bg-bi-red/10 border border-bi-red/30"
                      aria-hidden="true"
                    >
                      <Check size={12} className="text-bi-red" />
                    </span>
                    <div>
                      <h3 className="font-body font-semibold text-bi-white text-[14px] leading-snug">
                        {val.label}
                      </h3>
                      <p className="mt-1 font-body text-[13px] text-bi-muted leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`mt-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <Link to="/about" className="btn-primary">
                Learn About Our Approach
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBI;
