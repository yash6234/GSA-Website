import PageHero from '../components/PageHero';

const About = () => {


  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Gandhinagar Sports Academy was established with a vision to provide world-class sports training facilities to young athletes in Gujarat.'
    },
    {
      year: '2012',
      title: 'First State Champions',
      description: 'Our athletes won their first state-level championships, marking the beginning of our legacy of excellence.'
    },
    {
      year: '2015',
      title: 'Facility Expansion',
      description: 'Major expansion of facilities including new courts, swimming pool, and modern training equipment to international standards.'
    },
    {
      year: '2017',
      title: 'National Recognition',
      description: 'GSA athletes represented India at international competitions, bringing home medals and recognition for the academy.'
    },
    {
      year: '2019',
      title: 'Coaching Excellence',
      description: 'Introduced advanced coaching programs with certified international coaches and sports science support.'
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Launched online training modules and athlete performance tracking systems to enhance training effectiveness.'
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Over 500 active athletes training across 8 sports disciplines, with 50+ state and national level achievements.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="About Academy"
        title="Gandhinagar Sports Academy"
        subtitle="Why choose Gandhinagar Sports Academy? Because here, dreams take shape without compromise. We help athletes excel in sports while achieving academic success with world-class facilities and expert coaching."
        imageSrc="/about.png"
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
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

      {/* Mentors Statements */}
      

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-blue-600 mr-4">{event.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', desc: 'Striving for the highest standards in everything we do' },
              { title: 'Integrity', desc: 'Honest, ethical, and transparent in all our practices' },
              { title: 'Dedication', desc: 'Committed to the long-term development of every athlete' },
              { title: 'Innovation', desc: 'Embracing new techniques and technologies in sports training' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-blue-700 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
