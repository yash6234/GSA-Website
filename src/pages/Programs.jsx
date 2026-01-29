import ProgramsImageCards from '../components/ProgramsImageCards';

const Programs = () => {

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

      {/* Image cards only (no extra info) */}
      <ProgramsImageCards />
    </>
  );
};

export default Programs;
