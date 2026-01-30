import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const SOCIAL_POSTS = [
  {
    id: 'p1',
    platform: 'Instagram',
    account: '@gsasportsacademy',
    text: 'Cricket players are made at GSA Sports Academy! Strong fundamentals + smart coaching.',
    image: '/slide-6.webp',
  },
  {
    id: 'p2',
    platform: 'Instagram',
    account: '@gsasportsacademy',
    text: 'Learn from our coach — match preparation, mindset, and discipline.',
    image: '/slide-5.webp',
  },
  {
    id: 'p3',
    platform: 'Facebook',
    account: 'GSA Sports Academy',
    text: 'Our football team training continues. Join the next camp and level up your game.',
    image: '/slide_4.webp',
  },
];

const FilterButton = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center justify-center h-8 px-3 rounded-lg border text-xs font-semibold transition-colors ${
      active
        ? 'bg-charcoal-900 text-white border-charcoal-900'
        : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);

const TournamentsSection = ({ compact = false }) => {
  const [filter, setFilter] = useState('All');

  const posts = useMemo(() => {
    if (filter === 'All') return SOCIAL_POSTS;
    return SOCIAL_POSTS.filter((p) => p.platform === filter);
  }, [filter]);

  return (
    <section className={`relative overflow-hidden ${compact ? 'py-14 md:py-16' : 'py-16 md:py-24'} bg-gray-100`}>
      {/* subtle paper texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '22px 22px, 38px 38px',
          backgroundPosition: '0 0, 10px 10px',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1335px] mx-auto w-full px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-600">
            Join Our Sports Tournaments
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-gray-900">
            Tournaments
          </h2>
        </div>

        <div className="flex justify-center">
          {/* Social panel (centered) */}
          <div className="w-full max-w-[860px] rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/60 overflow-hidden">
            <div className="p-5 md:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold">
                    @
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Latest on our Social</p>
                    <p className="text-xs text-gray-500">Follow for more</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center h-8 px-4 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-charcoal-800 transition-colors"
                >
                  Follow
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <FilterButton active={filter === 'All'} onClick={() => setFilter('All')}>
                  All
                </FilterButton>
                <FilterButton active={filter === 'Facebook'} onClick={() => setFilter('Facebook')}>
                  Facebook
                </FilterButton>
                <FilterButton active={filter === 'Instagram'} onClick={() => setFilter('Instagram')}>
                  Instagram
                </FilterButton>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {posts.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border border-gray-200 overflow-hidden bg-white"
                  >
                    <div className="h-28 relative">
                      <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/25" aria-hidden />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-semibold text-gray-900">{p.account}</p>
                        <p className="text-[11px] text-gray-500">{p.platform}</p>
                      </div>
                      <p className="mt-2 text-[11px] text-gray-600 leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* <Link
                  to="/tournaments"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-lime-500 text-charcoal-900 font-semibold hover:bg-lime-400 transition-colors"
                >
                  View Tournaments
                </Link> */}
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-charcoal-800 transition-colors"
                >
                  Register / Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;

