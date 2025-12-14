import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";


const Footer = () => {
  return (
     <footer className="mt-16 bg-gradient-to-r from-green-50 to-green-100 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        {/* Top area */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between">
          {/* Brand / Short text */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-emerald-700">🌿 GreenNest</h2>
            <p className="mt-3 text-sm text-gray-600">
              Beautiful indoor plants that refresh your space and bring nature
              closer to home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wide mb-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-600 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-600 hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-emerald-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wide mb-3">
              SOCIAL
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-emerald-50 hover:text-emerald-600 text-gray-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-emerald-50 hover:text-emerald-600 text-gray-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-emerald-50 hover:text-emerald-600 text-gray-700 transition"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom ar */}
        <div className="border-t border-emerald-100 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025 GreenNest. All rights reserved.</p>
          <p>Made with 🌱 for plant lovers.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
