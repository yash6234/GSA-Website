const WelcomeHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url(/image.png)" }}
      aria-label="Welcome"
    >
      {/* Light overlay to keep dark text readable over photo */}
      <div className="absolute inset-0 bg-white/80" aria-hidden />

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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Gandhinagar Sports Academy
            </h1>
            <p className="mt-2 font-serif text-base sm:text-lg font-semibold text-gray-900">
              The Best Sports Academy in Gandhinagar and Gujarat
            </p>

            <div className="mt-6 space-y-4 text-[13px] sm:text-sm text-gray-700 leading-relaxed max-w-xl">
              <p>
                Are you ready to pursue your passion for sports without compromising on
                academics? We’re proud to offer structured training for young athletes with
                flexible routines that support both learning and performance.
              </p>
              <p>
                At Gandhinagar Sports Academy, our coaching programs—residential and
                non-residential—go beyond physical training. We focus on building a winning
                mindset, discipline, teamwork, and long-term athletic development with
                guidance from experienced coaches.
              </p>
              <p>
                Our mission is simple: to empower every athlete to excel in their game and
                build confidence for life. The journey starts here—train smart, stay consistent,
                and grow into your best self.
              </p>
            </div>
          </div>

          {/* Right: Illustration-style visual */}
          <div className="relative">
            <div className="mx-auto max-w-[520px]">
              <img
                src="/welcome-illustration.webp"
                alt="Cricket training illustration"
                className="w-full h-auto"
              />
            </div>
            {/* Small red pin accent like reference */}
            <div className="absolute top-10 left-10 w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm" aria-hidden />
          </div>
        </div>

        {/* Small center dot at bottom like reference */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
          <div className="w-8 h-8 rounded-full border border-gray-400/60 flex items-center justify-center bg-white/30">
            <div className="w-2 h-2 rounded-full bg-gray-700/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;

