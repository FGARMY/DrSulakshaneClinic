"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/**
 * Navbar — sticky header with logo, nav links, and "Book Appointment" CTA.
 * Transitions from transparent → white background on scroll.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/0"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Dr. Sulakshane Multi Speciality Clinic — home"
        >
          <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center text-white" aria-hidden="true">
            <Heart size={18} strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-navy text-[15px] leading-tight hidden sm:block">
            Dr. Sulakshane<br />
            <span className="text-[11px] font-normal text-slate-500 tracking-wide uppercase">
              Multi Speciality Clinic
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#booking"
          className="hidden md:inline-flex items-center gap-2 bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-dark transition-colors shadow-sm"
          aria-label="Book an appointment"
        >
          Book Appointment
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-navy"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 px-6 pt-6 flex flex-col gap-2 animate-fade-in">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-lg font-medium text-navy py-3 border-b border-slate-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="mt-4 bg-teal text-white text-center py-3.5 rounded-lg font-semibold"
            onClick={() => setOpen(false)}
            aria-label="Book an appointment"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
