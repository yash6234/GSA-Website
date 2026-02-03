import { useState } from 'react';
import PageHero from '../components/PageHero';

const About = () => {


  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
     image: '/icons/2010.png',
      description: 'Gandhinagar Sports Academy was established with a vision to provide world-class sports training facilities to young athletes in Gujarat.'
    },
    {
      year: '2012',
      title: 'First State Champions',
      image: '/icons/2012.png',
      description: 'Our athletes won their first state-level championships, marking the beginning of our legacy of excellence.'
    },
    {
      year: '2015',
      title: 'Facility Expansion',
      image: '/icons/2015.png',
      description: 'Major expansion of facilities including new courts, swimming pool, and modern training equipment to international standards.'
    },
    {
      year: '2017',
      title: 'National Recognition',
      image: '/icons/2017.png',
      description: 'GSA athletes represented India at international competitions, bringing home medals and recognition for the academy.'
    },
    {
      year: '2019',
      title: 'Coaching Excellence',
      image: '/icons/2019.png',
      description: 'Introduced advanced coaching programs with certified international coaches and sports science support.'
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      image: '/icons/2022.png',
      description: 'Launched online training modules and athlete performance tracking systems to enhance training effectiveness.'
    },
    {
      year: '2024',
      title: 'Community Impact',
      image: '/icons/2024.png',
      description: 'Over 500 active athletes training across 8 sports disciplines, with 50+ state and national level achievements.'
    }
  ];

  const [activeJourneyIndex, setActiveJourneyIndex] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="About Academy"
        title="Gandhinagar Sports Academy"
        subtitle="Why choose Gandhinagar Sports Academy? Because here, dreams take shape without compromise. We help athletes excel in sports while achieving academic success with world-class facilities and expert coaching."
        imageSrc="/about.png"
      />

      {/* Our Mission - left image, right text; stacked on mobile */}
      <section className="py-16 bg-white">
  <div className="max-w-[1335px] mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-10 items-center overflow-hidden rounded-2xl ">

      {/* LEFT CONTENT AREA */}
      <div>
        {/* Title Decoration */}
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[2px] w-10 bg-gray-300"></span>
          <div className="flex gap-1">
            <span className="h-2 w-2 bg-lime-500 rotate-45"></span>
            <span className="h-2 w-2 bg-lime-500 rotate-45"></span>
            <span className="h-2 w-2 bg-lime-500 rotate-45"></span>
          </div>
          <span className="h-[2px] w-10 bg-gray-300"></span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Our Mission
        </h2>

        {/* Item 1 */}
        <div className="flex gap-4 mb-6">
          <div className="h-12 w-12 flex items-center justify-center border border-lime-500 rounded-xl">
            <img src="/our_vision.png" alt="Vision" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Vision</h4>
            <p className="text-gray-600">
              Define our long-term aspirations and direction for young cricketers.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4 mb-6">
          <div className="h-12 w-12 flex items-center justify-center border border-lime-500 rounded-xl">
            <img src="/our_mission.png" alt="Mission" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Missions</h4>
            <p className="text-gray-600">
              Outline our core objectives and training strategies.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          <div className="h-12 w-12 flex items-center justify-center border border-lime-500 rounded-xl">
          <img src="/goals.png" alt="Goals" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Goals</h4>
            <p className="text-gray-600">
              Set measurable milestones for sporting success.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE MOSAIC */}
      <div className="relative hidden md:block">

        <div className="grid grid-cols-2 gap-4 rotate-45">

          <img
            src="/cricke.jpg"
            className="h-44 w-full object-cover rounded-2xl"
          />

          <img
            src="/slide_4.webp"
            className="h-44 w-full object-cover rounded-2xl"
          />

          <img
            src="/playground.png"
            className="h-44 w-full object-cover rounded-2xl"
          />

          <img
            src="/programs.png"
            className="h-44 w-full object-cover rounded-2xl"
          />

        </div>

      </div>

    </div>
  </div>
</section>


      {/* Founders - enhanced cards with accent, badge, and depth */}
      <section className="py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden />
        <div className="max-w-[1335px] mx-auto w-full px-4 sm:px-5 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
            Our Founders
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-xl mx-auto text-sm sm:text-base px-1">
            The people behind Gandhinagar Sports Academy
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
            {[
              {
                name: 'Narendra Modi',
                role: 'Founder',
                description: 'Narendra Modi is the founder of Gandhinagar Sports Academy, and his background, passion for sports, and vision for Gandhinagar Sports Academy.',
                image: '/founder.png',
              },
              {
                name: 'Amit Shah',
                role: 'Co-Founder',
                description: 'Amit Shah is the co-founder of Gandhinagar Sports Academy, and his background, passion for sports, and vision for Gandhinagar Sports Academy.',
                image: '/founder.png',
              },
              {
                name: 'Yogi Adityanath',
                role: 'Director of Sports',
                description: 'Yogi Adityanath is the director of Sports of Gandhinagar Sports Academy, and his background, passion for sports, and vision for Gandhinagar Sports Academy.',
                image: '/founder.png',
              },
            ].map((founder, index) => (
              <article
                key={index}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-200/50 overflow-hidden"
              >
                <div className="w-full h-1.5 bg-gradient-to-r from-lime-400 to-lime-500" aria-hidden />
                <div className="p-6 md:p-8 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ring-4 ring-lime-500/10 shadow-lg shadow-gray-300/50">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mt-5 tracking-tight">
                    {founder.name}
                  </h3>
                  <span className="inline-block mt-2 rounded-full bg-lime-500/15 text-lime-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                    {founder.role}
                  </span>
                  <div className="overflow-hidden">
                    <div className="w-12 h-0.5 bg-lime-300/50 rounded-full my-4 mx-auto" aria-hidden />
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm pb-1">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-12 md:py-14">
        <div className="max-w-[1335px] mx-auto w-full px-4 sm:px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900">
            Our Journey
          </h2>

          {/* Horizontal timeline */}
          <div className="relative pb-6 md:pb-24">
            {/* Horizontal Line */}
            <div
              className="absolute left-0 right-0 top-6 h-1 bg-lime-200 rounded-full"
              aria-hidden
            />

            {/* Icons */}
            <div
              className="flex items-start gap-6 md:gap-6 md:justify-between overflow-x-auto md:overflow-x-visible overflow-y-visible pb-2 scrollbar-hide snap-x snap-mandatory"
              onMouseLeave={() => setActiveJourneyIndex(null)}
            >
              {timeline.map((event, index) => {
                const isActive = index === activeJourneyIndex;
                const isFirst = index === 0;
                const isLast = index === timeline.length - 1;
                const edgeAlign =
                  isFirst ? 'self-start' : isLast ? 'self-end' : 'self-start';
                const detailsPosition = isFirst
                  ? 'md:left-0 md:translate-x-0'
                  : isLast
                    ? 'md:right-0 md:left-auto md:translate-x-0'
                    : 'md:left-1/2 md:-translate-x-1/2';
                return (
                  <button
                    key={`${event.year}-${event.title}`}
                    type="button"
                    className="group relative flex flex-col items-center min-w-[88px] md:min-w-[96px] focus:outline-none snap-start"
                    aria-label={`${event.year} - ${event.title}`}
                    aria-current={isActive ? 'true' : undefined}
                    onMouseEnter={() => setActiveJourneyIndex(index)}
                    onFocus={() => setActiveJourneyIndex(index)}
                    onClick={() => setActiveJourneyIndex(isActive ? null : index)}
                  >
                    <span
                      className={[
                        'w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all',
                        isActive ? 'ring-4 ring-lime-500' : 'ring-2 ring-gray-200 group-hover:ring-lime-400',
                      ].join(' ')}
                    >
                      <img src={event.image} alt={event.title} className="w-6 h-6" />
                    </span>
                    <span
                      className={[
                        'mt-2 text-sm font-semibold transition-colors',
                        isActive ? 'text-lime-700' : 'text-gray-700 group-hover:text-lime-700',
                      ].join(' ')}
                    >
                      {event.year}
                    </span>

                    {/* Details box (shows on hover/focus; stays open when active) */}
                    <div
                      className={[
                        'z-10 w-[240px] md:w-[260px]',
                        'mt-3 md:mt-0',
                        edgeAlign,
                        'md:absolute md:top-[68px]',
                        detailsPosition,
                        'rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/60',
                        'p-4 text-left transition-all duration-200 flex flex-col',
                        isActive
                          ? 'flex md:opacity-100 md:translate-y-0 md:pointer-events-auto'
                          : 'hidden md:flex md:opacity-0 md:translate-y-1 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto',
                      ].join(' ')}
                      role="note"
                    >
                      <p className="text-lime-700 font-bold text-xs tracking-wide">{event.year}</p>
                      <h3 className="text-base font-bold text-gray-900 mt-1">{event.title}</h3>
                      <p className="text-gray-700 text-xs leading-relaxed mt-2">{event.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-14 bg-white overflow-hidden">
        {/* subtle theme glow (different from footer) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-lime-50 via-white to-cyan-50 pointer-events-none"
          aria-hidden
        />
          <div className="relative max-w-[1335px] mx-auto w-full px-4 sm:px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-5 md:mb-8 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'Passion', desc: 'We build a love for sport—energy, consistency, and confidence every day.' },
              { title: 'Performance', desc: 'Structured training and match preparation that turns effort into results.' },
              { title: 'Holistic Growth', desc: 'Strong body, strong mind—discipline, resilience, and character on and off the field.' },
              { title: 'Sportsmanship', desc: 'Respect, teamwork, and integrity—winning the right way.' }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-lime-300 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
