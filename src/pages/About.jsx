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

      {/* Mission & Vision */}
      <section className="py-12 md:py-14">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To provide exceptional sports training and development opportunities that empower 
                young athletes to achieve their full potential, both on and off the field.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in holistic development, combining physical training with mental 
                conditioning, character building, and academic support to create well-rounded individuals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To become the premier sports academy in India, recognized for producing 
                world-class athletes who excel at national and international competitions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision a future where every talented athlete has access to quality training 
                and mentorship, regardless of their background, creating a legacy of sporting excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Founders Say */}
      <section className="py-12 md:py-14 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-7 text-gray-900">
            What Founders Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/50 p-6 md:p-8 overflow-hidden">
              {/* Quote mark */}
              <div
                className="absolute -top-6 -right-2 text-lime-500/15"
                aria-hidden
              >
                <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.17 6A5.99 5.99 0 0 0 2 12v6h6v-6H5.5a3.5 3.5 0 0 1 3.5-3.5V6H7.17zm14 0A5.99 5.99 0 0 0 16 12v6h6v-6h-2.5A3.5 3.5 0 0 1 23 8.5V6h-1.83z" />
                </svg>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-xl bg-lime-500 text-charcoal-900 flex items-center justify-center flex-shrink-0 shadow-lg shadow-lime-500/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7.17 6A5.99 5.99 0 0 0 2 12v6h6v-6H5.5a3.5 3.5 0 0 1 3.5-3.5V6H7.17zm14 0A5.99 5.99 0 0 0 16 12v6h6v-6h-2.5A3.5 3.5 0 0 1 23 8.5V6h-1.83z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                Gandhinagar Sports Academy positions itself as a center of excellence where young athletes
                can develop holistically through structured sports education and training. The academy
                emphasizes passion, performance, and comprehensive facilities to support athletic growth
                across various sports disciplines. Its mission is to nurture talent with professional
                coaching, create opportunities for competitive success, and build physical and mental
                strength in athletes. By offering complete training programs and an environment that
                fosters sporting excellence, the academy strives to help each student reach their full
                potential and pursue success at higher levels of competition.
              </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-14">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-6 text-gray-900">
            Our Journey
          </h2>
          {/* <p className="text-center text-gray-600 mb-6 md:mb-7 max-w-2xl mx-auto">
            Hover an icon to see the details (tap on mobile).
          </p> */}

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
                const edgeAlign =
                  index === 0 ? 'self-start' : index === timeline.length - 1 ? 'self-end' : 'self-center';
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
                        // mobile: expand under the icon (tap to toggle)
                        'mt-3 md:mt-0',
                        edgeAlign,
                        'md:absolute md:top-[68px] md:left-1/2 md:-translate-x-1/2',
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
        <div className="relative max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
