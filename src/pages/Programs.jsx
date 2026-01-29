import ProgramsImageCards from '../components/ProgramsImageCards';
import PageHero from '../components/PageHero';

const Programs = () => {

  return (
    <>
      <PageHero
        eyebrow="Train With Us"
        title="Sports Programs"
        subtitle="Comprehensive training programs across multiple sports disciplines. Expert coaching, modern facilities, and personalized development plans for every athlete."
        imageSrc="/programs.png"
      />

      {/* Image cards only (no extra info) */}
      <ProgramsImageCards />
    </>
  );
};

export default Programs;
