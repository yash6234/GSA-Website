import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Academy' },
    { path: '/programs', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-transparent ">
      <div className="max-w-[1335px] mx-auto w-full px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-lime-500 shadow-lg shadow-lime-500/25 ring-2 ring-gray-200 transition-all duration-300 group-hover:shadow-lime-500/40 group-hover:ring-lime-400/50">
              <img
                src="/gsa_logo.jpg"
                alt="GSA Logo"
                className="h-9 w-9 object-contain rounded-lg"
              />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-black">
                Gandhinagar
              </span>
              <span className="block text-sm font-semibold tracking-widest text-black uppercase">
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
                className={`relative px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-black'
                    : 'text-black/80 hover:text-black'
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
            {/* <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-lime-500 text-black text-sm font-semibold tracking-wide shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
            >
              Enroll Now
            </Link> */}
            <button
              className="md:hidden p-2.5 rounded-xl text-black hover:bg-gray-100 transition-colors"
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

        {/* Mobile Navigation - full overlay style */}
        {/* <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold uppercase tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                      ? 'bg-lime-500/20 text-black border border-lime-500/30'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center mt-4 mx-4 py-3.5 rounded-xl bg-lime-500 text-charcoal-900 font-semibold tracking-wide shadow-lg shadow-lime-500/25"
            >
              Enroll Now
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
