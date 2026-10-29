import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { useInView } from '../../hooks/useInView';

// REPLACE: Use actual company office / headquarters photography
const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop';


const Overview: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section
      id="overview"
      ref={ref}
      className="bg-bi-black py-24 lg:py-36 overflow-hidden"
      aria-labelledby="overview-heading"
    >
      <div className="container-bi">
        {/* Two-column asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Left column — content (spans 7 cols) */}
          <div className="lg:col-span-7 lg:pr-16">
            {/* Section label */}
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <SectionLabel number="01" label="Who We Are" className="mb-10" />
            </div>

            {/* Heading */}
            <h2
              id="overview-heading"
              className={`font-display font-bold uppercase text-bi-white leading-[0.95] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                transitionDelay: '120ms',
              }}
            >
              A Group Built on{' '}
              <span className="italic text-bi-muted-lt font-normal">Strategic</span>
              <br />
              Vision &amp; Discipline
            </h2>

            {/* Divider */}
            <div
              className={`flex items-center gap-4 mt-10 mb-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '240ms' }}
              aria-hidden="true"
            >
              <span className="block w-16 h-px bg-bi-red" />
              <span className="block flex-1 h-px bg-bi-border" />
            </div>

            {/* Body copy */}
            <div
              className={`space-y-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-bi-muted-lt text-[15px] leading-[1.75] max-w-xl">
                BI Holding Group is a diversified investment holding company established
                with the objective of building, developing and managing a portfolio of
                business interests across different economic sectors.
              </p>
              <p className="text-bi-muted text-[15px] leading-[1.75] max-w-xl">
                Our activities span a range of industries, allowing us to pursue
                opportunities across established markets and emerging business fields.
                We take a long-term approach to investment, focusing on businesses and
                projects with solid fundamentals, development potential and the ability
                to generate sustainable value.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '420ms' }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-bi-red hover:text-bi-white transition-colors duration-200 group"
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Sector tags row */}
            <div
              className={`mt-16 border-t border-bi-border pt-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-bi-muted mb-4">
                Areas of Activity
              </p>
              <div className="flex flex-wrap gap-3">
                {['Real Estate', 'Information Technology', 'Consulting', 'Distribution', 'Strategic Investments'].map((sector) => (
                  <span
                    key={sector}
                    className="font-body text-[12px] tracking-wide text-bi-muted-lt border border-bi-border px-3 py-1.5"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — image + large number (spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Large background number */}
            <div
              className="absolute -top-6 -right-4 z-0 select-none pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="font-display font-extrabold text-bi-border leading-none"
                style={{ fontSize: 'clamp(8rem, 16vw, 16rem)', opacity: 0.5 }}
              >
                01
              </span>
            </div>

            {/* Image frame */}
            <div
              className={`relative z-10 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Corner accent */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-bi-red z-20"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-bi-red z-20"
                aria-hidden="true"
              />
              <img
                src={OVERVIEW_IMAGE}
                alt="Modern corporate office environment"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
              {/* Image overlay tint */}
              <div
                className="absolute inset-0 bg-bi-black/20"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
