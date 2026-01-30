import { Link } from 'react-router-dom';
import TournamentsSection from '../components/TournamentsSection';

const TOURNAMENTS = [
  {
    id: 'gsa-open-tennis',
    sport: 'Tennis',
    title: 'GSA Open Tennis Championship',
    date: 'Feb 18–20, 2026',
    location: 'Gandhinagar',
    status: 'Registration Open',
  },
  {
    id: 'gsa-cricket-league',
    sport: 'Cricket',
    title: 'GSA Junior Cricket League',
    date: 'Mar 05–10, 2026',
    location: 'Gandhinagar',
    status: 'Trials Ongoing',
  },
  {
    id: 'gsa-swim-meet',
    sport: 'Swimming',
    title: 'GSA Summer Swim Meet',
    date: 'Apr 12, 2026',
    location: 'GSA Aquatic Center',
    status: 'Coming Soon',
  },
  {
    id: 'gsa-football-cup',
    sport: 'Football',
    title: 'GSA Youth Football Cup',
    date: 'May 02–04, 2026',
    location: 'Training Grounds',
    status: 'Registration Open',
  },
  {
    id: 'gsa-pickleball-open',
    sport: 'Pickleball',
    title: 'GSA Pickleball Open',
    date: 'May 18–19, 2026',
    location: 'Indoor Courts',
    status: 'Coming Soon',
  },
  {
    id: 'gsa-basketball-3x3',
    sport: 'Basketball',
    title: 'GSA 3x3 Basketball Challenge',
    date: 'Jun 08, 2026',
    location: 'GSA Arena',
    status: 'Coming Soon',
  },
];

const badgeClass = (status) => {
  if (status === 'Registration Open') return 'bg-lime-500/15 text-lime-700 border-lime-500/30';
  if (status === 'Trials Ongoing') return 'bg-blue-500/15 text-blue-700 border-blue-500/30';
  return 'bg-gray-500/15 text-gray-700 border-gray-500/30';
};

const Tournaments = () => {
  return (
    <>
      <TournamentsSection />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Upcoming Events
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Dates are subject to change. Register early to reserve your spot.
              </p>
            </div>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
            >
              Enquiry  Register
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOURNAMENTS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-white border border-gray-200 shadow-md shadow-gray-200/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-charcoal-900">{t.sport}</span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeClass(
                        t.status
                      )}`}
                    >
                      {t.status}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-gray-900">{t.title}</h3>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-900">Date:</span> {t.date}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Location:</span> {t.location}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-charcoal-900 text-white font-semibold hover:bg-charcoal-800 transition-colors"
                    >
                      Contact for Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-900 to-black text-white p-10 md:p-12 overflow-hidden relative">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500/20 via-transparent to-transparent"
              aria-hidden
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Want to host a tournament at GSA?
                </h3>
                <p className="mt-2 text-white/80">
                  We support schools, clubs, and community groups with venues, officials, and event coordination.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-lime-500 text-charcoal-900 font-semibold shadow-lg shadow-lime-500/25 hover:bg-lime-400 transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournaments;

