"use client";

import { Activity, Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "Doctors", "Services", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div 
          className={`flex items-center justify-between rounded-2xl px-5 md:px-8 py-3 transition-all duration-500 ease-in-out relative z-50 ${
            scrolled || mobileMenuOpen
              ? "glass-nav shadow-lg" 
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Dr. Sulakshane Clinic Home" onClick={() => setMobileMenuOpen(false)}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled || mobileMenuOpen
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "bg-white/20 text-white backdrop-blur-sm"
            }`} aria-hidden="true">
              <Activity size={22} />
            </div>
            <div className="flex flex-col">
              <span className={`text-base md:text-lg font-display font-bold leading-tight ${
                scrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
              }`}>
                Dr. Sulakshane
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase ${
                scrolled || mobileMenuOpen ? "text-indigo-600" : "text-white/70"
              }`}>
                Multi Speciality Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all relative group ${
                  scrolled 
                    ? "text-slate-600 hover:text-indigo-600" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300 w-0 group-hover:w-full" aria-hidden="true"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:+919876543210"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                scrolled 
                  ? "text-slate-600 hover:text-indigo-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <Link 
              href="#appointment" 
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scrolled || mobileMenuOpen ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed top-[80px] left-4 right-4 z-50 bg-white rounded-2xl p-6 shadow-2xl transition-all duration-500 origin-top ${
            mobileMenuOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, idx) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-display font-semibold text-slate-700 hover:text-indigo-600 transition-all py-2"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item}
              </Link>
            ))}
            <hr className="border-slate-100 my-2" />
            <Link 
              href="#appointment" 
              className="bg-indigo-600 text-white text-center py-4 rounded-xl font-display font-bold shadow-lg shadow-indigo-200/50 transition-all active:scale-[0.98]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
