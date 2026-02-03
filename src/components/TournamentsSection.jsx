import { Link } from 'react-router-dom';
import { CONTENT } from './content/String';
import InstagramEmbeded from './InstagramEmbeded';

const SOCIAL_POSTS = CONTENT.tournaments.socialPosts;

const TournamentsSection = ({ compact = false }) => {
  const instagramPosts = SOCIAL_POSTS.filter(
    (p) => p.platform === 'Instagram' && Boolean(p.permalink)
  );

  return (
    <section className={`relative overflow-hidden ${compact ? 'py-14 md:py-16' : 'py-16 md:py-24'} bg-gray-100`}>
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
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Tournaments
          </h2>
        </div>

        <div className="flex justify-center">
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

                <Link
                  to="https://www.instagram.com/gandhinagarsportsacademy/"
                  target="_blank"
                  className="inline-flex items-center justify-center h-8 px-4 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-charcoal-800 transition-colors"
                >
                  Follow
                </Link>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="w-full md:w-[760px] max-h-[65vh] md:max-h-[560px] overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200 bg-gray-50 p-4 scrollbar-hide">
                {instagramPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    {instagramPosts.map((p) => (
                      <div key={p.id} className="w-full max-w-[360px] rounded-xl border border-gray-200 bg-white">
                        <InstagramEmbeded permalink={p.permalink} captioned />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
                    No Instagram embeds found. Add Instagram post links in{' '}
                    <span className="font-semibold">CONTENT.tournaments.socialPosts</span> (as{' '}
                    <span className="font-semibold">permalink</span>) to show them here.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;

