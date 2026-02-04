import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const setScrolled = () => {
      const scrolled = (window.scrollY || 0) > 10;
      document.documentElement.classList.toggle('nav-scrolled', scrolled);
    };

    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
    return () => {
      window.removeEventListener('scroll', setScrolled);
      document.documentElement.classList.remove('nav-scrolled');
    };
  }, []);

  // Lock body scroll when mobile sidebar is open so closing (backdrop/X) restores scroll
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Academy' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/playground', label: 'Playground' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300 bg-transparent [.nav-scrolled_&]:bg-white/95 [.nav-scrolled_&]:backdrop-blur [.nav-scrolled_&]:shadow-md [.nav-scrolled_&]:shadow-black/5"
    >
      <div className="max-w-[1335px] mx-auto w-full px-4">
        <nav className="flex items-center justify-between h-24 py-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center rounded-xl">
              <img
                src="/gsa_logo.png"
                alt="GSA Logo"
                className="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain rounded-lg"
              />
            </div>
            <div>
              <span className="flex text-2xl font-bold tracking-tight text-white [.nav-scrolled_&]:text-charcoal-900">
                Gandhinagar
              </span>
              <span className="flex text-sm font-semibold tracking-widest text-white uppercase [.nav-scrolled_&]:text-charcoal-900">
                Sports Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg text-white [.nav-scrolled_&]:text-charcoal-900 ${
                  isActive(link.path)
                    ? ''
                    : 'hover:text-white [.nav-scrolled_&]:hover:text-charcoal-900'
                }`}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-lg bg-lime-500/10 border border-lime-500/30" aria-hidden />
                )}
                <span className="relative">{link.label}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-lime-500 to-transparent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              className={`md:hidden p-2.5 rounded-xl transition-colors ${
                isMenuOpen
                  ? 'text-gray-900 hover:bg-gray-200'
                  : 'text-white hover:bg-white/10 [.nav-scrolled_&]:text-charcoal-900 [.nav-scrolled_&]:hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden
        />
        {/* Sidebar panel for the mobile layout */}
        <aside
          className={`fixed top-0 right-0 z-[70] h-full w-[min(280px,85vw)] bg-white shadow-xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#ffffff' }}
          aria-label="Mobile menu"
        >
            <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
            <button
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex px-4 py-3.5 rounded-xl text-base font-semibold uppercase tracking-wide transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-lime-500/15 text-gray-900 border border-lime-500/40'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
