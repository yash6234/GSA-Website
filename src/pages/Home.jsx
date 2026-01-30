import HeroSection from '../components/HeroSection';
import HomeWelcomeSection from '../components/HomeWelcomeSection';
import ProgramsPanel from '../components/ProgramsPanel';
import TournamentsSection from '../components/TournamentsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeWelcomeSection />

      {/* Background image for these Home sections only */}
      <div
        className="relative bg-center bg-cover"
        style={{ backgroundImage: 'url(/bg_image.png)' }}
      >
        {/* Dark overlay so white text stays readable */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" aria-hidden />

        {/* Sports We Offer - boxes */}
        {/* <section className="relative py-16 md:py-24">
          <div className="max-w-[1335px] mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
              Sports We Offer
            </h2>
            <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Train in the sport you love with programs designed for every age and level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {SPORTS_CATEGORIES.map((sport) => (
                <Link
                  key={sport.name}
                  to="/programs"
                  className="group rounded-[1.25rem] p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  <span className="text-4xl mb-3 block">{sport.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#F59E0B] transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-sm text-slate-300">{sport.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        {/* Our Sports Programs - hover to show sport name */}
        <div className="relative">
          <ProgramsPanel variant="dark" />
        </div>
      </div>

      {/* Tournaments (new background + exact layout like reference) */}
      <TournamentsSection />
    </>
  );
};

export default Home;
