import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HomeWelcomeSection from '../components/HomeWelcomeSection';
import ProgramsPanel from '../components/ProgramsPanel';

const SPORTS_CATEGORIES = [
  { name: 'Football', icon: '⚽', desc: 'Technical & tactical training' },
  { name: 'Basketball', icon: '🏀', desc: 'Skills and team play' },
  { name: 'Cricket', icon: '🏏', desc: 'Batting, bowling & fielding' },
  { name: 'Tennis', icon: '🎾', desc: 'Court & match preparation' },
  { name: 'Pickleball', icon: '🏓', desc: 'Paddle sport basics & drills' },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeWelcomeSection />

      {/* Sports We Offer - boxes */}
      <section className="py-16 md:py-24 bg-gray-50 align-center">
        <div className="max-w-[1335px] mx-auto w-full px-4"  >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-3 text-center tracking-tight" >
            Sports We Offer
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Train in the sport you love with programs designed for every age and level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {SPORTS_CATEGORIES.map((sport) => (
              <Link
                key={sport.name}
                to="/programs"
                className="group bg-white rounded-[1.25rem] p-6 shadow-md shadow-gray-200/60 hover:shadow-xl hover:shadow-lime-500/10 border border-gray-100 hover:border-lime-500/30 transition-all duration-300 text-center"
              >
                <span className="text-4xl mb-3 block">{sport.icon}</span>
                <h3 className="text-lg font-bold text-charcoal-900 mb-1 group-hover:text-lime-600 transition-colors">
                  {sport.name}
                </h3>
                <p className="text-sm text-gray-600">{sport.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sports Programs - hover to show sport name */}
      <ProgramsPanel />
    </>
  );
};

export default Home;
