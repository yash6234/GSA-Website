import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-[1335px] mx-auto w-full px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">Gandhinagar Sports Academy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering young athletes to achieve excellence through world-class training,
              state-of-the-art facilities, and dedicated mentorship. Learn sports the right way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-400 transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                  About Academy
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-lime-400 transition-colors text-sm font-medium">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-lime-400 transition-colors text-sm font-medium">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-lime-400 transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <img
                  src="/icons/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 invert opacity-80"
                />
                <span>Gandhinagar, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 flex-shrink-0 invert opacity-80"
                />
                <span>+91 7874298784</span>
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 flex-shrink-0 invert opacity-80"
                />
                <span>info@gandhinagarsportsacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gandhinagar Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
