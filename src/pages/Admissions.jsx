import { useState } from 'react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    sport: '',
    experience: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (no backend, just show success message)
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        age: '',
        sport: '',
        experience: '',
        message: ''
      });
    }, 5000);
  };

  const sports = [
    'Cricket',
    'Football',
    'Basketball',
    'Tennis',
    'Badminton',
    'Athletics',
    'Swimming',
    'Volleyball'
  ];

  const inputClass = 'w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white transition-all duration-200';
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';

  return (
    <>
      {/* Hero Section - modern sports academy */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" aria-hidden />
        <div className="relative max-w-[1335px] mx-auto w-full px-4">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">Start Your Journey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Admissions & Enquiry
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Take the first step towards excellence. Fill out the form below and our team will
            get back to you with everything you need to begin your sports journey at GSA.
          </p>
        </div>
      </section>

      {/* Admission Process - modern cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            From enquiry to enrollment — a simple path to joining our academy.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Enquiry', desc: 'Fill out the admission form with your details' },
              { step: '02', title: 'Consultation', desc: 'Our team will contact you for a consultation' },
              { step: '03', title: 'Trial Session', desc: 'Attend a trial session to experience our training' },
              { step: '04', title: 'Enrollment', desc: 'Complete enrollment and begin your training journey' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-cyan-500/25 mb-5 ring-2 ring-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form - modern card */}
      <section className="py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Enquiry Form</h2>
              <p className="text-gray-600 mb-8">Tell us about the athlete and the sport they want to learn.</p>

              {submitted ? (
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/80 p-8 text-center shadow-inner">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your enquiry has been submitted successfully. Our team will contact you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="studentName" className={labelClass}>Student Name *</label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter student's full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="parentName" className={labelClass}>Parent/Guardian Name *</label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter parent/guardian name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="age" className={labelClass}>Student Age *</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="5"
                        max="25"
                        className={inputClass}
                        placeholder="Age in years"
                      />
                    </div>

                    <div>
                      <label htmlFor="sport" className={labelClass}>Sport of Interest *</label>
                      <select
                        id="sport"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select a sport</option>
                        {sports.map((sport) => (
                          <option key={sport} value={sport}>
                            {sport}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className={labelClass}>Previous Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner - No prior experience</option>
                      <option value="intermediate">Intermediate - Some training experience</option>
                      <option value="advanced">Advanced - Competitive experience</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`${inputClass} resize-none`}
                      placeholder="Any questions or specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information - modern cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal consultation with our team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free trial session to experience our training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed information about programs and fees</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Medical fitness certificate (for certain sports)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Age-appropriate documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Parent/guardian consent for minors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Commitment to regular training schedule</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
