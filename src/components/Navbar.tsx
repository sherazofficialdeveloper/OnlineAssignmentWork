/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { MessageSquare, PhoneCall, Menu, X } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const contactLink = getWhatsAppLink(
    "Hi, I want to inquire about the online assignment and typing jobs."
  );

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100 py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleScrollTo("home")}
          >
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-red-600 transition-colors duration-300">
              <MessageSquare className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-blue-900 to-red-600 bg-clip-text text-transparent">
                Assignment Work
              </span>
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                Platform
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Packages", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase())}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-5 py-2.5 rounded-full shadow-lg shadow-red-500/10 hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5 text-xs uppercase"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Contact WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {["Home", "Services", "Packages", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
              >
                {item}
              </button>
            ))}
            <div className="pt-2">
              <a
                href={contactLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold p-3.5 rounded-xl shadow-md text-sm active:scale-95 transition-transform"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
