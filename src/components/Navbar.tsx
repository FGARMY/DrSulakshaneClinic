"use client";

import { Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-8"}`}>
      <nav className={`container mx-auto px-6 max-w-7xl`}>
        <div className={`flex items-center justify-between rounded-full px-8 py-3 transition-all duration-300 ${
            scrolled ? "bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/50" : "bg-transparent"
          }`}>
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
              <Activity size={24} />
            </div>
            <span className={`text-xl font-display font-bold ${scrolled ? "text-slate-900" : "text-white"}`}>
              Dr. Sulakshane <span className="font-semibold opacity-80">Clinic</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Doctors", "Resources", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:opacity-100 transition-opacity relative group ${
                  scrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <Link 
            href="#appointments" 
            className={`font-medium px-6 py-2.5 rounded-full text-sm transition-all shadow-sm font-display hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary-dark" 
                : "bg-white text-primary hover:bg-slate-50"
            }`}
          >
            Book Appointment
          </Link>
        </div>
      </nav>
    </div>
  );
}
