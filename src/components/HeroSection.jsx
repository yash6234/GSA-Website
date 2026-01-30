import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';

const SLIDES = CONTENT.hero.slides;
const ROTATE_INTERVAL_MS = 5000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[currentIndex];

  return (
    <section
      className="relative -mt-20 min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background slides - extend behind navbar */}
      <div className="absolute inset-0">
        {SLIDES.map((s, index) => (

          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img src={s.image} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/40 z-[1]"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1335px] mx-auto px-4 pt-12 pb-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg tracking-tight">
            {slide.title}{' '}
            <span className="text-lime-400">{slide.highlight}</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={slide.primaryCta.to}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold text-lg shadow-lg shadow-lime-500/30 hover:bg-lime-400 hover:shadow-lime-500/40 transition-all duration-300 text-center"
            >
              {slide.primaryCta.label}
            </Link>
            <Link
              to={slide.secondaryCta.to}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/80 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300 text-center"
            >
              {slide.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
