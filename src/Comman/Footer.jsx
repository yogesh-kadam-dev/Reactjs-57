
import {
  RiInstagramLine,
  RiFacebookFill,
  RiTwitterXLine,
  RiGithubFill,
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiArrowRightLine,
} from "@remixicon/react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              My<span className="text-indigo-500">Website</span>
            </h2>
            <p className="mb-5 max-w-xs text-sm leading-6 text-gray-400">
              Building modern digital experiences with creativity,
              passion, and innovation.
            </p>

            <div className="flex gap-4">
              <a href="#" aria-label="Instagram"
                className="transition hover:text-indigo-400">
                <RiInstagramLine size={22} />
              </a>
              <a href="#" aria-label="Facebook"
                className="transition hover:text-indigo-400">
                <RiFacebookFill size={22} />
              </a>
              <a href="#" aria-label="X"
                className="transition hover:text-indigo-400">
                <RiTwitterXLine size={22} />
              </a>
              <a href="#" aria-label="GitHub"
                className="transition hover:text-indigo-400">
                <RiGithubFill size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Web Development</a></li>
              <li><a href="#" className="hover:text-indigo-400">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-indigo-400">App Development</a></li>
              <li><a href="#" className="hover:text-indigo-400">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <RiMapPinLine size={20} className="shrink-0 text-indigo-400" />
                <span>Ahilyanagar, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine size={20} className="shrink-0 text-indigo-400" />
                <a href="mailto:hello@example.com" className="hover:text-white">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <RiPhoneLine size={20} className="shrink-0 text-indigo-400" />
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
             
             
            </div>

          
          </div>
        </div>

       
      </div>
    </footer>
  );
}

export default Footer;