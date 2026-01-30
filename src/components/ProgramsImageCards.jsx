import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';

const PROGRAM_CARDS = CONTENT.programs.imageCards;

const ProgramsImageCards = () => {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-[1335px] mx-auto w-full px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_CARDS.map((card) => (
            <Link
              key={card.label}
              to="/admissions"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              aria-label={`Read more about ${card.title}`}
            >
              <div className="relative h-[200px] md:h-[220px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* soft dark overlay like reference */}
                <div className="absolute inset-0 bg-black/20" aria-hidden />
              </div>

              {/* Top label (black tag) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-3 py-1 bg-black text-white text-[11px] font-semibold tracking-widest">
                  {card.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsImageCards;

