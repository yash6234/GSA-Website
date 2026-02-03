import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';

const SPORTS = CONTENT.programs.panelSports;
const SPORTS2 = CONTENT.programs.panelSports2;
const PROGRAMS = CONTENT.programs;

const ProgramsPanel = ({ showViewAll = true, variant = 'default' }) => {
  const isDark = variant === 'dark';
  const textHeading = 'text-black-500';
  const textBody = 'text-white';
  const textContentBg = isDark ? 'bg-white/40 backdrop-blur-sm' : 'bg-orange-50';

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-[900px] mx-auto w-full px-4 md:px-6">
        {showViewAll && (
          <div className="text-center mb-10">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Our Sports Programs
            </h2>
          </div>
        )}

        {SPORTS.map((sport, sportIndex) => (
          <div key={`${sport.name}-${sportIndex}`} className="space-y-0">
            {/* Block 1: Image left, Text right - side by side, equal columns */}
            <div className="grid md:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[4/3] md:min-h-[420px] md:aspect-auto order-2 md:order-1">
                <img
                  src={sport.image}
                  alt={`${sport.name} training`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className={`p-5 md:p-6 order-1 md:order-2 flex flex-col justify-center md:min-h-[420px] md:overflow-y-auto text-left ${textContentBg}`}
              >
                <h3 className={`text-xl md:text-2xl font-bold ${textHeading} mb-3`}>
                  Personalized Training for Aspiring Cricketers
                </h3>
                <p className={`${textBody} text-sm leading-relaxed mb-4`}>
                  {PROGRAMS.trainingIntro}
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  {PROGRAMS.trainingPoints.map((item) => (
                    <li key={item.title} className={`${textBody} text-sm leading-relaxed`}>
                      <span className="font-semibold">{item.title}:</span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 2: Text left, Image right - side by side, equal columns */}
            <div className="grid md:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-2xl">
              <div
                className={`p-5 md:p-6 order-1 flex flex-col justify-center md:min-h-[320px] md:overflow-y-auto text-left ${textContentBg}`}
              >
                <h3 className={`text-xl md:text-2xl font-bold ${textHeading} mb-3`}>
                  World-Class Facilities to Elevate Your Game
                </h3>
                <p className={`${textBody} text-sm leading-relaxed mb-4`}>
                  {PROGRAMS.facilitiesIntro}
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  {PROGRAMS.facilitiesList.map((item) => (
                    <li key={item} className={`${textBody} text-sm leading-relaxed`}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-lime-500 text-charcoal-900 text-sm font-semibold hover:bg-lime-400 transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] md:min-h-[420px] md:aspect-auto order-2">
                <img
                  src={SPORTS2[sportIndex]?.image ?? SPORTS2[0]?.image}
                  alt={`${SPORTS2[sportIndex]?.name ?? SPORTS2[0]?.name ?? 'Sports'} facilities`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Testimonial */}
        <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden bg-background-blur text-white px-6 py-10 md:px-12 md:py-12 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed font-playwrite italic">
              &ldquo;{PROGRAMS.testimonialQuote}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic font-semibold text-lime-400">
                {PROGRAMS.testimonialAuthor}
              </cite>
              <p className="text-white/80 text-sm mt-1">
                {PROGRAMS.testimonialRole}
              </p>
            </footer>
          </blockquote>
        </div>

        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsPanel;
