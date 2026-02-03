import HeroSection from '../components/HeroSection';
import HomeWelcomeSection from '../components/HomeWelcomeSection';
import ProgramsPanel from '../components/ProgramsPanel';
import TournamentsSection from '../components/TournamentsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeWelcomeSection />

      {/* Background image for Our Sports Programs – expands with content */}
      <div
        className="relative bg-center bg-cover"
        style={{ backgroundImage: 'url(/bg_image.png)' }}
      >
        {/* Dark overlay so content stays readable */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" aria-hidden />

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
