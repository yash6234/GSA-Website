import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDE_IMAGES = [
  '/adani-sportsline-cricket-academy-shantigram-gandhinagar-gujarat-institutes-for-sports-va1z7ldx4y-250.webp',
  '/slide-2.webp',
  '/slide-3.webp',
];

const ROTATE_INTERVAL_MS = 5000;

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
      className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background slides - auto-rotating, no buttons */}
      <div className="absolute inset-0">
        {SLIDE_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-[0]' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 z-[1]"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1335px] mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Excellence in Sports,{' '}
            <span className="text-yellow-400">Excellence in Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed drop-shadow-md">
            Join Gandhinagar Sports Academy and train with the best. World-class
            facilities, expert coaches, and a legacy of champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors text-center"
            >
              Enroll Now
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
