const PageHero = ({ title, subtitle, eyebrow, imageSrc }) => {
  return (
    <section
      className="relative -mt-24 pt-24 overflow-hidden text-white"
      aria-label={title}
    >
      {/* Background image (extends behind the navbar) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"
        aria-hidden
      />

      <div className="relative max-w-[1335px] mx-auto w-full px-4">
        <div className="min-h-[320px] md:min-h-[380px] flex items-center py-14 md:py-16">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-lime-300 font-semibold tracking-widest uppercase text-sm mb-4">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-md font-semibold md:text-md text-white/90 leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

