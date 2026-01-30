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
