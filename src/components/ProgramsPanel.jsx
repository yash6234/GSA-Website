import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';

const SPORTS = CONTENT.programs.panelSports;

const ProgramsPanel = ({ showViewAll = true, variant = 'default' }) => {
  const isDark = variant === 'dark';

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1335px] mx-auto w-full px-4">
        {showViewAll && (
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-blue-400'
              }`}
            >
              Our Sports Programs
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}
            >
              Hover over each sport to see the program name
            </p>
          </div>
        )}
        {/* Mobile: vertical cards with gaps. Tablet/Desktop: hover strip like desktop. */}
        <div className="md:overflow-hidden md:shadow-xl md:border md:border-gray-200">
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:w-full md:overflow-visible">
            {SPORTS.map((sport, index) => (
              <Link
                key={`${sport.name}-${index}`}
                to="/programs"
                className="group relative w-full overflow-hidden rounded-2xl md:rounded-none md:flex-1 md:min-w-0 transition-all duration-300 ease-out md:hover:flex-[2]"
              >
                {/* Fixed height so hover grows width only (not height) */}
                <div className="h-[220px] sm:h-[260px] md:h-[460px] lg:h-[520px] w-full relative">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Tablet/Desktop: show label on hover (mobile shows images only) */}
                  <div className="hidden md:flex absolute inset-x-0 bottom-0 items-center justify-center py-5 bg-black/0 group-hover:bg-black/70 transition-all duration-300">
                    <span className="text-white text-sm md:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {sport.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
            >
              View All Programs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsPanel;
