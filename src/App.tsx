import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Contact from './pages/Contact';

// Scroll to the #hash section if there is one, otherwise to the top on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const samePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant', block: 'start' });
    } else if (!samePage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

// Skip link target
const SkipLink: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bi-red focus:text-white focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-medium"
  >
    Skip to main content
  </a>
);

const AppLayout: React.FC = () => (
  <>
    <SkipLink />
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route path="/"           element={<Home />}       />
      <Route path="/about"      element={<About />}      />
      <Route path="/businesses" element={<Businesses />} />
      <Route path="/contact"    element={<Contact />}    />
      {/* Catch-all: redirect to home */}
      <Route path="*"           element={<Home />}       />
    </Routes>
    <Footer />
  </>
);

const App: React.FC = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
