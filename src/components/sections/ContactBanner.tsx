import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { useInView } from '../../hooks/useInView';

const ContactBanner: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="contact-banner"
      ref={ref}
      className="bg-bi-darker py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="contact-banner-heading"
    >
      {/* Background geometric element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(215,25,32,0.04))',
        }}
      />
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 w-px h-32 bg-bi-red pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-bi">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-8">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <SectionLabel label="Business Enquiries" className="mb-8" />
            </div>

            <h2
              id="contact-banner-heading"
              className={`font-display font-bold uppercase text-bi-white leading-[0.95] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', transitionDelay: '120ms' }}
            >
              Let's Start a{' '}
              <span className="italic font-normal text-bi-muted-lt">Conversation</span>
            </h2>

            <p className={`mt-6 text-bi-muted text-[15px] leading-relaxed max-w-xl transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '240ms' }}>
              Whether you are a potential business partner, investor, or sector client,
              we would be glad to hear from you. Get in touch to discuss how we
              can work together.
            </p>

            {/* Divider */}
            <div className={`flex items-center gap-4 my-8 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }} aria-hidden="true">
              <span className="block w-12 h-px bg-bi-red" />
              <span className="block flex-1 h-px bg-bi-border" />
            </div>

            {/* CTA row */}
            <div className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '380ms' }}>
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="mailto:enquiries@biholdinggroup.com"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-bi-muted-lt hover:text-bi-white transition-colors duration-200 group"
                aria-label="Send an email to BI Holding Group"
              >
                <Mail size={14} className="text-bi-red flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">enquiries@biholdinggroup.com</span>
              </a>
            </div>
          </div>

          {/* Typographic brand accent */}
          <div
            className={`hidden lg:flex lg:col-span-4 items-center justify-end transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
            aria-hidden="true"
          >
            <p
              className="font-display font-extrabold uppercase leading-[0.88] text-right select-none"
              style={{
                fontSize: 'clamp(4rem, 7vw, 6.5rem)',
                color: 'rgba(255,255,255,0.05)',
                letterSpacing: '-0.02em',
              }}
            >
              Building<br />Value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
