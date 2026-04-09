import { Activity, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2.5 mb-6" aria-label="Dr. Sulakshane Clinic Home">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg" aria-hidden="true">
                <Activity size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  Dr. Sulakshane
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-indigo-400">
                  Multi Speciality Clinic
                </span>
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed font-light text-sm mb-6">
              Trusted pediatric & surgical care for your entire family. 15+ years of medical excellence in Aundh, Pune.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {["Facebook", "Instagram", "Youtube"].map((name) => (
                <a 
                  key={name} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all"
                  aria-label={`Visit our ${name} page`}
                >
                  <span className="text-xs font-bold">{name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Doctors', 'Services', 'Testimonials', 'Contact'].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Pediatrics', 'General Surgery', 'Vaccination', 'Child Nutrition', 'Preventive Care'].map(link => (
                <li key={link}>
                  <Link href="#services" className="text-slate-500 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-light leading-relaxed">
                  Near ITI Signal, Aundh,<br/>Pune, MH 411007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm font-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm font-light">care@drsulakshane.com</span>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <Clock size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm font-light space-y-1">
                  <p>Mon – Sat: 10 AM – 1 PM</p>
                  <p>Mon – Sat: 5 PM – 8 PM</p>
                  <p className="text-rose-400">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-600 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Dr. Sulakshane Multi Speciality Clinic. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
