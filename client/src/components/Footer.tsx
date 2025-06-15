import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-slate-50 to-slate-100 text-gray-800 pt-16 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Glass background blob */}
      <div className="absolute -top-24 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-300 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full bg-purple-300 opacity-20 blur-3xl"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* Brand & social */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Behati</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-xs">
            We craft digital products that transform businesses and empower brands.
          </p>
          <div className="flex space-x-4 mt-5 text-gray-600">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-700" /></a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="/about" className="hover:text-black transition">About Us</a></li>
            <li><a href="/services" className="hover:text-black transition">Services</a></li>
            <li><a href="/insights" className="hover:text-black transition">Insights</a></li>
            <li><a href="/contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="/careers" className="hover:text-black transition">Careers</a></li>
            <li><a href="/privacy-policy" className="hover:text-black transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-black transition">Terms of Service</a></li>
            <li><a href="/support" className="hover:text-black transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-sm text-gray-600 mb-3">Join our newsletter to receive the latest insights.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-white/60 backdrop-blur border border-gray-300 px-4 py-2 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-sm text-center text-gray-500 relative z-10">
        © {new Date().getFullYear()} Behati — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;