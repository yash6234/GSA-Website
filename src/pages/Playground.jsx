import { useState } from 'react';

const Playground = () => {
  const [formData, setFormData] = useState({
    date: '',
    ground: '',
    slot: '',
    timeSlot: '',
    sport: 'Cricket',
  });

  const grounds = ['GROUND-A', 'GROUND-B'];
  const slots = ['Full-Day', 'Half-Day'];
  const timeSlotsByOption = {
    'GROUND-A-Full-Day': ['6:00 AM - 12:00 PM', '12:00 PM - 6:00 PM'],
    'GROUND-A-Half-Day': ['6:00 AM - 10:00 AM', '10:00 AM - 2:00 PM', '2:00 PM - 6:00 PM'],
    'GROUND-B-Full-Day': ['7:00 AM - 1:00 PM', '1:00 PM - 7:00 PM'],
    'GROUND-B-Half-Day': ['7:00 AM - 11:00 AM', '11:00 AM - 3:00 PM', '3:00 PM - 7:00 PM'],
  };

  const timeSlotKey = formData.ground && formData.slot
    ? `${formData.ground}-${formData.slot}`
    : null;
  const availableTimeSlots = timeSlotKey ? timeSlotsByOption[timeSlotKey] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'ground' || name === 'slot') {
      setFormData((prev) => ({ ...prev, timeSlot: '' }));
    }
  };

  const selectGround = (ground) => {
    setFormData((prev) => ({ ...prev, ground, timeSlot: '' }));
  };

  const selectSlot = (slot) => {
    setFormData((prev) => ({ ...prev, slot, timeSlot: '' }));
  };

  const selectSport = (sport) => {
    setFormData((prev) => ({ ...prev, sport }));
  };

  const billAmount = 0;

  const inputClass =
    'w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 focus:bg-white transition-all duration-200';
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';
  const buttonBase =
    'px-5 py-3 rounded-xl text-sm font-semibold border border-gray-200 transition-all duration-200';

  return (
    <>
      {/* Hero with breadcrumbs */}
      <section
        className="relative -mt-24 pt-24 overflow-hidden text-lime-500"
        aria-label="Playground Booking"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/h_bg.jpg)' }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"
          aria-hidden
        />
        <div className="relative max-w-[1335px] mx-auto w-full px-4">
          <div className="min-h-[280px] md:min-h-[320px] flex flex-col justify-center py-14 md:py-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow">
              Playground Booking
            </h1>
            <nav aria-label="Breadcrumb" className="mt-3">
              <ol className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                <li className="text-white font-medium">Playground Booking</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-14">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="max-w-3xl mx-auto">
            {/* Heading block */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Book Your Favorite Ground!
              </h2>
              <p className="mt-2 text-lime-600 italic text-lg">
                Get Ready for an Epic Game!
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Choose your favorite date, pick your ground, and select your playtime to unlock
                unbeatable pricing. Let&apos;s make every moment on the field count and create
                unforgettable memories together!
              </p>
            </div>

            {/* Ground image placeholder */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-lg shadow-gray-200/50 bg-gray-100 mb-10">
              <div
                className="w-full h-48 md:h-64 bg-center bg-cover"
                style={{ backgroundImage: 'url(/playground.png)' }}
                aria-hidden
              />
            </div>

            {/* Sport selection */}
            <div className="mb-8">
              <p className={labelClass}>Select Sport</p>
              <div className="flex gap-4">
                {['Cricket', 'Football'].map((sport) => (
                  <button
                    key={sport}
                    type="button"
                    onClick={() => selectSport(sport)}
                    className={`flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border-2 transition-all duration-200 ${
                      formData.sport === sport
                        ? 'border-lime-500 bg-lime-50 text-lime-700 shadow-md shadow-lime-500/20'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-lime-300'
                    }`}
                  >
                    <span className="text-2xl" aria-hidden>
                      {sport === 'Cricket' ? '🏏' : '⚽'}
                    </span>
                    <span className="font-semibold text-sm uppercase tracking-wide">{sport}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Booking form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <p className={labelClass}>Select Ground</p>
                  <div className="flex gap-3">
                    {grounds.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => selectGround(g)}
                        className={`${buttonBase} flex-1 ${
                          formData.ground === g
                            ? 'bg-lime-500 border-lime-500 text-charcoal-900 shadow-lg shadow-lime-500/25'
                            : 'bg-white text-gray-700 hover:border-lime-300'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className={labelClass}>Select Slot</p>
                  <div className="flex gap-3">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => selectSlot(s)}
                        className={`${buttonBase} flex-1 ${
                          formData.slot === s
                            ? 'bg-lime-500 border-lime-500 text-charcoal-900 shadow-lg shadow-lime-500/25'
                            : 'bg-white text-gray-700 hover:border-lime-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="timeSlot" className={labelClass}>
                    Select Time Slot
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">
                      {formData.ground && formData.slot
                        ? 'Choose a time slot'
                        : 'Select ground and day type to view available time slots.'}
                    </option>
                    {availableTimeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Your Bill */}
            <div className="mt-10 p-5 rounded-2xl bg-lime-50 border border-lime-200/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gray-900">Your Bill</span>
              </div>
              <span className="text-xl font-bold text-gray-900">₹ {billAmount}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Playground;
