import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDE_IMAGES = ['/slide_4.webp', '/slide-5.webp', '/slide-6.webp'];
const ROTATE_INTERVAL_MS = 5000;

const FLOATING_STATS = [
  { value: '500+', label: 'Athletes' },
  { value: '8', label: 'Sports' },
  { value: '15+', label: 'Years' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % SLIDE_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative -mt-20 min-h-[calc(520px+5rem)] md:min-h-[calc(620px+5rem)] flex items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background slides - extend behind navbar */}
      <div className="absolute inset-0">
        {SLIDE_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/40 z-[1]"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1335px] mx-auto px-4 py-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg tracking-tight">
            Excellence in Sports,{' '}
            <span className="text-lime-400">Excellence in Life</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-xl">
            Join Gandhinagar Sports Academy. World-class facilities, expert coaches, and a legacy of champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold text-lg shadow-lg shadow-lime-500/30 hover:bg-lime-400 hover:shadow-lime-500/40 transition-all duration-300 text-center"
            >
              Join Now
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/80 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300 text-center"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Floating stat cards - overlapping bottom */}
        <div className="absolute right-4 bottom-0 translate-y-1/2 hidden lg:flex gap-4 z-[3]">
          {FLOATING_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-xl shadow-black/20 px-6 py-4 min-w-[100px] text-center border border-gray-100"
            >
              <p className="text-2xl font-bold text-charcoal-900">{stat.value}</p>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile floating stats - below hero content */}
      <div className="relative z-[2] lg:hidden flex justify-center gap-4 -mt-6 px-4 pb-4">
        {FLOATING_STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-xl shadow-black/15 px-5 py-3 flex-1 max-w-[120px] text-center border border-gray-100"
          >
            <p className="text-xl font-bold text-charcoal-900">{stat.value}</p>
            <p className="text-xs font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
