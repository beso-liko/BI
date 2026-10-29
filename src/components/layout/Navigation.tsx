import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { label: 'Home',       to: '/'           },
  { label: 'About',      to: '/about'       },
  { label: 'Businesses', to: '/businesses'  },
  { label: 'Contact',    to: '/contact'     },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled
    ? 'bg-bi-black/95 backdrop-blur-sm border-b border-bi-border'
    : 'bg-transparent border-b border-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
        role="banner"
      >
        <div className="container-bi flex items-center justify-between h-18">
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-body text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 relative group ${
                    isActive ? 'text-bi-white' : 'text-bi-muted-lt hover:text-bi-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-bi-red transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-[12px] tracking-[0.12em] uppercase py-2 px-5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-bi-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bi-red"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-bi-black flex flex-col transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Red accent line at top */}
        <div className="h-px bg-bi-red w-full" aria-hidden="true" />

        <div className="flex-1 flex flex-col container-bi pt-24 pb-12">
          <nav className="flex flex-col gap-1 mt-4" aria-label="Mobile navigation">
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-display font-bold text-5xl uppercase tracking-wide py-3 border-b border-bi-border transition-colors duration-200 ${
                    isActive ? 'text-bi-white' : 'text-bi-muted hover:text-bi-white'
                  }`
                }
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <span className="block w-12 h-px bg-bi-red mb-6" aria-hidden="true" />
            <Link
              to="/contact"
              className="btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
            <p className="mt-6 text-bi-muted text-xs tracking-wide">
              BI Holding Group — Building Value. Creating Opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
