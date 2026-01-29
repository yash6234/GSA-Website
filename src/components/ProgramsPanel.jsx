import { Link } from 'react-router-dom';

const SPORTS = [
  { name: 'Tennis', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80' },
  { name: 'Cricket', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80' },
  { name: 'Pickleball', image: 'public/pickleball.webp' },
  { name: 'Football', image: 'public/football.webp' },
  { name: 'Swimming', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80' },
];

const ProgramsPanel = ({ showViewAll = true }) => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1335px] mx-auto w-full px-4">
        {showViewAll && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 tracking-tight">
              Our Sports Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hover over each sport to see the program name
            </p>
          </div>
        )}
        {/* One continuous strip – no gaps, no rounded; hovered image grows, others shrink */}
        <div className="overflow-hidden shadow-xl border border-gray-200">
          <div className="flex w-full overflow-x-auto md:overflow-visible">
            {SPORTS.map((sport, index) => (
              <Link
                key={`${sport.name}-${index}`}
                to="/programs"
                className="group relative flex-1 min-w-[200px] md:min-w-0 shrink-0 md:shrink flex overflow-hidden transition-all duration-300 ease-out md:hover:flex-[2]"
              >
                {/* Fixed height so hover grows width only (not height) */}
                <div className="h-[320px] md:h-[460px] lg:h-[520px] w-full relative">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover: dark bar at bottom with sport/activity name */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-5 bg-black/0 group-hover:bg-black/70 transition-all duration-300">
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
