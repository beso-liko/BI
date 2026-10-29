import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

// REPLACE: Use actual company photography — architecture / cityscape
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&auto=format&fit=crop';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero — BI Holding Group"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imgRef}
          src={HERO_IMAGE}
          alt="City skyline — BI Holding Group investment portfolio"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Multi-stop gradient overlay — left heavy, right opens */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(11,11,11,0.97) 0%, rgba(11,11,11,0.88) 40%, rgba(11,11,11,0.55) 70%, rgba(11,11,11,0.3) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background: 'linear-gradient(to top, #0B0B0B 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Vertical red accent line — left gutter */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-bi-red z-10 hidden lg:block"
        aria-hidden="true"
        style={{ left: '5.5%' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end container-bi pb-20 lg:pb-28 pt-40">
        {/* Section label */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <SectionLabel label="BI Holding Group" className="mb-8" />
        </div>

        {/* Main headline — unconstrained, full editorial scale */}
        <div className="max-w-none">
          <h1
            className={`font-display font-extrabold uppercase tracking-tight text-bi-white transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              fontSize: 'clamp(4.5rem, 12vw, 11rem)',
              lineHeight: '0.86',
              transitionDelay: '350ms',
            }}
          >
            <span className="block">Building</span>
            <span className="block text-bi-red">Value.</span>
            <span className="block">Creating</span>
            <span className="block">Opportunities.</span>
          </h1>

          {/* Tagline */}
          <p
            className={`mt-8 text-bi-muted-lt text-base md:text-lg max-w-lg leading-relaxed font-body font-light transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            A diversified investment holding group focused on sustainable growth,
            strategic development, and long-term value creation across multiple industries.
          </p>

          {/* CTA row */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '650ms' }}
          >
            <Link to="/businesses" className="btn-primary">
              Our Businesses
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-outline">
              Who We Are
            </Link>
          </div>
        </div>

        {/* Floating sector panel — compositional element bottom-right */}
        <div
          className={`hidden lg:block absolute right-0 bottom-0 w-72 border-l border-t border-bi-border bg-bi-dark/90 backdrop-blur-sm p-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '800ms' }}
          aria-hidden="true"
        >
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-bi-muted mb-4">
            Sectors of Operation
          </p>
          <ul className="space-y-2">
            {['Real Estate', 'Information Technology', 'Consulting', 'Distribution'].map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 font-body text-sm text-bi-white/80"
              >
                <span className="block w-2 h-px bg-bi-red flex-shrink-0" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-bi-muted hover:text-bi-white transition-colors duration-200"
        aria-label="Scroll to overview section"
      >
        <ChevronDown
          size={20}
          className="animate-bounce"
          aria-hidden="true"
        />
      </a>
    </section>
  );
};

export default Hero;
