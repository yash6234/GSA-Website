import { Link } from 'react-router-dom';

const Programs = () => {
  const sports = [
    {
      name: 'Cricket',
      description: 'Comprehensive cricket training covering batting, bowling, fielding, and match strategies. Our program includes net practice, ground training, and competitive matches.',
      ageGroups: ['Under-12', 'Under-15', 'Under-18', 'Senior'],
      features: ['Professional coaching', 'Net practice facilities', 'Match preparation', 'Fitness training'],
      schedule: 'Monday to Saturday, 6:00 AM - 8:00 AM & 4:00 PM - 6:00 PM'
    },
    {
      name: 'Football',
      description: 'Develop technical skills, tactical awareness, and physical fitness. Training includes dribbling, passing, shooting, and team formations.',
      ageGroups: ['Under-10', 'Under-14', 'Under-18', 'Senior'],
      features: ['Grass and turf fields', 'Tactical sessions', 'Goalkeeper training', 'Strength & conditioning'],
      schedule: 'Monday to Saturday, 5:30 AM - 7:30 AM & 5:00 PM - 7:00 PM'
    },
    {
      name: 'Basketball',
      description: 'Master the fundamentals and advanced techniques of basketball. Focus on shooting, dribbling, defense, and team play.',
      ageGroups: ['Under-12', 'Under-16', 'Under-19', 'Senior'],
      features: ['Indoor courts', 'Skill development', 'Game strategies', 'Physical conditioning'],
      schedule: 'Monday to Saturday, 6:00 AM - 8:00 AM & 4:30 PM - 6:30 PM'
    },
    {
      name: 'Tennis',
      description: 'Professional tennis coaching for all skill levels. Learn proper technique, footwork, and match play strategies.',
      ageGroups: ['Under-10', 'Under-14', 'Under-18', 'Senior'],
      features: ['Hard courts', 'Clay court training', 'Individual coaching', 'Tournament preparation'],
      schedule: 'Monday to Saturday, 6:30 AM - 8:30 AM & 4:00 PM - 7:00 PM'
    },
    {
      name: 'Badminton',
      description: 'Intensive badminton training focusing on technique, agility, and match tactics. Suitable for beginners to advanced players.',
      ageGroups: ['Under-12', 'Under-16', 'Under-19', 'Senior'],
      features: ['Indoor courts', 'Shuttle practice', 'Footwork drills', 'Match play'],
      schedule: 'Monday to Saturday, 6:00 AM - 8:00 AM & 5:00 PM - 7:00 PM'
    },
    {
      name: 'Athletics',
      description: 'Track and field training covering sprints, long distance, jumps, and throws. Develop speed, endurance, and technique.',
      ageGroups: ['Under-14', 'Under-18', 'Senior'],
      features: ['400m track', 'Field events', 'Strength training', 'Competition preparation'],
      schedule: 'Monday to Saturday, 6:00 AM - 8:00 AM & 4:00 PM - 6:00 PM'
    },
    {
      name: 'Swimming',
      description: 'Learn and perfect swimming techniques across all strokes. Programs for beginners to competitive swimmers.',
      ageGroups: ['Under-10', 'Under-14', 'Under-18', 'Senior'],
      features: ['Olympic-size pool', 'Lane swimming', 'Technique correction', 'Endurance training'],
      schedule: 'Monday to Saturday, 6:00 AM - 8:00 AM & 4:00 PM - 7:00 PM'
    },
    {
      name: 'Volleyball',
      description: 'Develop skills in serving, spiking, blocking, and team coordination. Training for both indoor and beach volleyball.',
      ageGroups: ['Under-14', 'Under-18', 'Senior'],
      features: ['Indoor courts', 'Beach volleyball', 'Team tactics', 'Physical training'],
      schedule: 'Monday to Saturday, 6:30 AM - 8:30 AM & 5:00 PM - 7:00 PM'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sports Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive training programs across multiple sports disciplines. 
            Expert coaching, modern facilities, and personalized development plans for every athlete.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h2 className="text-2xl font-bold">{sport.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{sport.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Age Groups:</h3>
                    <div className="flex flex-wrap gap-2">
                      {sport.ageGroups.map((age, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {age}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Program Features:</h3>
                    <ul className="space-y-2">
                      {sport.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Training Schedule:</p>
                        <p className="text-gray-600 text-sm">{sport.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Coaches</h3>
              <p className="text-gray-600 text-sm">
                All programs are led by certified coaches with years of experience and proven track records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">
                Multiple time slots available to accommodate school schedules and other commitments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Regular assessments and performance tracking to monitor improvement and adjust training plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-[1335px] mx-auto w-full px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join a Program?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us to learn more about our programs, schedules, and admission process.
          </p>
          <Link
            to="/admissions"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
