import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';

const SPORTS = CONTENT.programs.panelSports;

const ProgramsPanel = ({ showViewAll = true, variant = 'default' }) => {
  const isDark = variant === 'dark';
  const [flippedIndex, setFlippedIndex] = useState(null);

  const programDetails = useMemo(
    () => ({
      Cricket: {
        points: [
          'Improve bowling strength, speed & accuracy',
          'Batting technique, timing & shot selection',
          'Fielding drills: catching, throwing & agility',
          'Match practice: strategy, game awareness & mindset',
          'Fitness: stamina, core strength & injury prevention',
          'Mental & Discipline Training: Confidence, focus, Teamwork & leadership',
        ],
      },
    }),
    []
  );

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[500px] mx-auto w-full px-4">
        {showViewAll && (
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-blue-400'
              }`}
            >
              Our Sports Programs
            </h2>
            {/* <p
              className={`text-xl max-w-2xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}
            >
              Hover over each sport to see the program name
            </p> */}
          </div>
        )}
        {/* Mobile: vertical cards with gaps. Tablet/Desktop: hover strip like desktop. */}
        <div className="md:overflow-hidden md:shadow-xl md:border md:border-gray-200">
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:w-full md:overflow-visible">
            {SPORTS.map((sport, index) => (
              <button
                key={`${sport.name}-${index}`}
                type="button"
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFlippedIndex(flippedIndex === index ? null : index);
                  }
                }}
                className={[
                  'group relative w-full overflow-hidden rounded-2xl md:rounded-none md:flex-1 md:min-w-0',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                  'flip-card',
                  flippedIndex === index ? 'is-flipped' : '',
                ].join(' ')}
                aria-pressed={flippedIndex === index ? 'true' : 'false'}
                aria-label={`${sport.name} program details`}
              >
                {/* Mobile: taller card so back content fits; desktop: fixed height for hover strip */}
                <div className="h-[300px] min-[480px]:h-[340px] sm:h-[360px] md:h-[460px] lg:h-[520px] w-full relative">
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-face">
                      <div className="w-full h-full relative">
                        <img
                          src={sport.image}
                          alt={sport.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-5 sm:pb-5 flex flex-col gap-2">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-white text-base sm:text-lg font-bold">{sport.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back: flex column so on mobile the points list can scroll if needed */}
                    <div className="flip-card-face flip-card-back">
                      <div
                        className={[
                          'w-full h-full flex flex-col p-4 sm:p-5 md:p-6',
                          isDark ? 'bg-transparent-blur text-white' : 'bg-white text-charcoal-900',
                        ].join(' ')}
                      >
                        <div className="flex-shrink-0">
                          <p className={['text-lg sm:text-xl md:text-2xl font-semibold tracking-widest uppercase text-center', isDark ? 'text-cyan-300' : 'text-cyan-600'].join(' ')}>
                            Cricket Program
                          </p>
                        </div>

                        <div className="flex-1 min-h-0 overflow-y-auto mt-2 sm:mt-3 -mx-1 px-1 scrollbar-hide">
                          <div className="flex flex-col gap-2 sm:gap-2.5">
                            {(programDetails[sport.name]?.points || []).map((point) => (
                              <div key={point} className="flex items-start gap-2 sm:gap-2.5">
                                <div
                                  className={[
                                    'mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center flex-shrink-0',
                                    isDark ? 'bg-white/10 border-orange' : 'bg-yellow-50 border-cyan-200/70',
                                  ].join(' ')}
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-500" />
                                </div>
                                <p className={['text-xs sm:text-sm leading-relaxed', isDark ? 'text-orange-200' : 'text-orange'].join(' ')}>
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={['flex items-center justify-between gap-3 pt-3 sm:pt-4 flex-shrink-0 border-t', isDark ? 'border-white/10' : 'border-gray-200'].join(' ')}>
                          <Link
                            to="/programs"
                            className="inline-flex items-center justify-center h-9 sm:h-10 px-3 sm:px-4 rounded-xl bg-lime-500 text-charcoal-900 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Program
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {showViewAll && (
          <div className="text-center mt-10">
            {/* <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
            >
              View All Programs
            </Link> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsPanel;
