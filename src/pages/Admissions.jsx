import { useState } from 'react';
import PageHero from '../components/PageHero';

const MAX_FILE_SIZE_KB = 50;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_KB * 1024;

const Admissions = () => {
  const [formData, setFormData] = useState({
    traineeName: '',
    fatherName: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    schoolName: '',
    currentClass: '',
    fatherOccupation: '',
    traineePhoto: null,
    traineeSignature: null,
    fatherSignature: null,
    session: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [fileErrors, setFileErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files?.[0] ?? null;
    setFileErrors((prev) => ({ ...prev, [name]: null }));

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      setFileErrors((prev) => ({
        ...prev,
        [name]: `File must be under ${MAX_FILE_SIZE_KB}KB.`
      }));
      e.target.value = '';
      setFormData((prev) => ({ ...prev, [name]: null }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasFileError = Object.values(fileErrors).some(Boolean);
    if (hasFileError) return;
    setError(null);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        traineeName: '',
        fatherName: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        schoolName: '',
        currentClass: '',
        fatherOccupation: '',
        traineePhoto: null,
        traineeSignature: null,
        fatherSignature: null,
        session: '',
        time: ''
      });
      setFileErrors({});
    }, 5000);
  };

  const inputClass = 'w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 focus:bg-white transition-all duration-200';
  const labelClass = 'flex text-sm font-semibold text-gray-800 mb-2';

  return (
    <>
      <PageHero
        eyebrow="Start Your Journey"
        title="Admissions & Enquiry"
        subtitle="Take the first step towards excellence. Fill out the form below and our team will get back to you with everything you need to begin your sports journey at GSA."
        imageSrc="/admissions.png"
      />

      {/* Enquiry Form */}
      <section className="py-20">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro (outside the form card) */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Admissions & Enquiry</h2>
              <p className="mt-2 text-gray-600">
                Tell us about the athlete and the sport they want to learn—our team will guide you with the next steps.
              </p>
              <blockquote className="mt-4 inline-flex rounded-xl border border-lime-200/70 bg-lime-50 px-4 py-3 text-gray-900">
                <p className="text-sm font-semibold">“Excellence in Sports, Excellence in Life.”</p>
              </blockquote>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50">
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
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="traineeName" className={labelClass}>Trainee Name *</label>
                      <input
                        type="text"
                        id="traineeName"
                        name="traineeName"
                        value={formData.traineeName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter trainee full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="fatherName" className={labelClass}>Father&apos;s Name *</label>
                      <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter father's name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter phone number"
                        maxLength={10}
                        inputMode="numeric"
                      />
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className={labelClass}>Date of Birth *</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Contact & Education */}
                  <div>
                    <label htmlFor="address" className={labelClass}>Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className={`${inputClass} resize-none`}
                      placeholder="Enter full address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="schoolName" className={labelClass}>School Name *</label>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter school name"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentClass" className={labelClass}>Current Class *</label>
                      <input
                        type="text"
                        id="currentClass"
                        name="currentClass"
                        value={formData.currentClass}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g. 8th, 9th"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fatherOccupation" className={labelClass}>Father&apos;s Occupation *</label>
                    <input
                      type="text"
                      id="fatherOccupation"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Enter father's occupation"
                    />
                  </div>

                  {/* Documents - file uploads (Max 50KB) */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-800 mb-3">Documents</p>
                    <div>
                      <label htmlFor="traineePhoto" className={labelClass}>Trainee Photo (Max {MAX_FILE_SIZE_KB}KB) *</label>
                      <input
                        type="file"
                        id="traineePhoto"
                        name="traineePhoto"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-lime-500 file:text-charcoal-900 file:cursor-pointer hover:file:bg-lime-400"
                      />
                      {formData.traineePhoto && (
                        <p className="text-gray-500 text-xs mt-1">{formData.traineePhoto.name}</p>
                      )}
                      {fileErrors.traineePhoto && (
                        <p className="text-red-500 text-sm mt-1">{fileErrors.traineePhoto}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="traineeSignature" className={labelClass}>Trainee Signature (Max {MAX_FILE_SIZE_KB}KB) *</label>
                      <input
                        type="file"
                        id="traineeSignature"
                        name="traineeSignature"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-lime-500 file:text-charcoal-900 file:cursor-pointer hover:file:bg-lime-400"
                      />
                      {formData.traineeSignature && (
                        <p className="text-gray-500 text-xs mt-1">{formData.traineeSignature.name}</p>
                      )}
                      {fileErrors.traineeSignature && (
                        <p className="text-red-500 text-sm mt-1">{fileErrors.traineeSignature}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="fatherSignature" className={labelClass}>Father&apos;s Signature (Max {MAX_FILE_SIZE_KB}KB) *</label>
                      <input
                        type="file"
                        id="fatherSignature"
                        name="fatherSignature"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-lime-500 file:text-charcoal-900 file:cursor-pointer hover:file:bg-lime-400"
                      />
                      {formData.fatherSignature && (
                        <p className="text-gray-500 text-xs mt-1">{formData.fatherSignature.name}</p>
                      )}
                      {fileErrors.fatherSignature && (
                        <p className="text-red-500 text-sm mt-1">{fileErrors.fatherSignature}</p>
                      )}
                    </div>
                  </div>

                  {/* Session & Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="session" className={labelClass}>Session *</label>
                      <select
                        id="session"
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select a session</option>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="time" className={labelClass}>Time *</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select time</option>
                        <option value="6-8">6:00 AM - 8:00 AM</option>
                        <option value="8-10">8:00 AM - 10:00 AM</option>
                        <option value="4-6">4:00 PM - 6:00 PM</option>
                        <option value="6-8pm">6:00 PM - 8:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl font-semibold bg-lime-500 text-charcoal-900 shadow-lg shadow-lime-500/25 hover:bg-lime-400 hover:shadow-lime-500/40 transition-all duration-300"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-14 bg-gray-50">
        <div className="max-w-[1335px] mx-auto w-full px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-lime-300 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal consultation with our team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free trial session to experience our training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed information about programs and fees</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-lime-300 transition-colors">
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
