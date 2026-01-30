import { CONTENT } from './content/String';

const HomeWelcomeSection = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden" aria-label="Welcome">
      {/* Subtle grid background like reference */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1335px] mx-auto w-full px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: Title + copy */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {CONTENT.homeWelcome.title}
            </h2>
            <p className="mt-2 font-serif text-base sm:text-lg font-semibold text-gray-900">
              {CONTENT.homeWelcome.subtitle}
            </p>

            <div className="mt-6 space-y-4 text-[13px] sm:text-sm text-gray-700 leading-relaxed max-w-xl">
              {CONTENT.homeWelcome.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="mx-auto max-w-[520px]">
              <img
                src="/join_img.webp"
                alt="Join our academy"
                className="w-full h-auto"
              />
            </div>
            {/* Small red pin accent like reference */}
            <div
              className="absolute top-10 left-10 w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm"
              aria-hidden
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeWelcomeSection;

