import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { LogoSymbol } from '../ui/Logo';

const footerLinks = [
  { label: 'Home',       to: '/'           },
  { label: 'About Us',   to: '/about'       },
  { label: 'Businesses', to: '/businesses'  },
  { label: 'Contact',    to: '/contact'     },
];

// ids match the section anchors on the Businesses page
const sectors = [
  { label: 'Real Estate',                    id: 'real-estate'            },
  { label: 'Information Technology',         id: 'information-technology' },
  { label: 'Consulting & Business Services', id: 'consulting'             },
  { label: 'Distribution & Trade',           id: 'distribution'           },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bi-darker border-t border-bi-border" role="contentinfo">
      {/* Upper footer */}
      <div className="container-bi py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-6 text-bi-muted text-sm leading-relaxed max-w-sm">
              A diversified investment holding group focused on sustainable growth,
              strategic development and long-term value creation across multiple sectors.
            </p>
            {/* Red accent */}
            <span className="block mt-8 w-12 h-px bg-bi-red" aria-hidden="true" />
            <p className="mt-4 font-display font-semibold text-lg tracking-wide uppercase text-bi-white/80">
              Building Value. Creating Opportunities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-bi-muted mb-5">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-bi-muted-lt hover:text-bi-white transition-colors duration-200 group inline-flex items-center gap-2"
                  >
                    <span className="block w-0 h-px bg-bi-red transition-all duration-200 group-hover:w-3" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-bi-muted mb-5">
              Our Sectors
            </h3>
            <ul className="space-y-3" role="list">
              {sectors.map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/businesses#${sector.id}`}
                    className="font-body text-sm text-bi-muted-lt hover:text-bi-white transition-colors duration-200"
                  >
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="border-t border-bi-border">
        <div className="container-bi py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoSymbol height={20} />
            <p className="text-bi-muted text-xs tracking-wide">
              © {year} BI Holding Group. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-bi-muted text-xs hover:text-bi-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-bi-muted text-xs hover:text-bi-white transition-colors duration-200">
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
