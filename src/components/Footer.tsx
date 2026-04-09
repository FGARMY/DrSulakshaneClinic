import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

/**
 * Footer — clean minimal footer with social placeholders (Facebook, Instagram),
 * Quick Links, Services list, contact details, and Sunday hours note.
 */

/* Simple inline SVG social icons */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.77 1.153 4.92 4.92 0 011.153 1.772c.163.46.35 1.26.403 2.43.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.153 1.77 4.92 4.92 0 01-1.772 1.153c-.46.163-1.26.35-2.43.403-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.77-1.153 4.92 4.92 0 01-1.153-1.772c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.153-1.77A4.92 4.92 0 015.56 1.797c.46-.163 1.26-.35 2.43-.403C9.253 1.337 9.633 1.325 12 1.325zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a6.88 6.88 0 00-2.49 1.62A6.88 6.88 0 00.03 4.74C-.267 5.503-.47 6.375-.528 7.653-.586 8.933-.6 9.341-.6 12.6s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a6.88 6.88 0 001.62 2.49 6.88 6.88 0 002.49 1.62c.763.297 1.635.5 2.913.558C8.333 25.186 8.741 25.2 12 25.2s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a6.88 6.88 0 002.49-1.62 6.88 6.88 0 001.62-2.49c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a6.88 6.88 0 00-1.62-2.49A6.88 6.88 0 0019.86.63C19.097.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-400 pt-16 pb-8 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + Social */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Home">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center text-white" aria-hidden="true">
                <Heart size={16} strokeWidth={2.5} />
              </div>
              <span className="text-white font-semibold text-sm">
                Dr. Sulakshane Clinic
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Trusted paediatric &amp; surgical care for families in Aundh, Pune.
              15+ years of medical excellence.
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-light flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-light flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "Doctors", "Services", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Pediatrics", "General Surgery", "Vaccination", "Child Nutrition", "Preventive Care"].map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-slate-500 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={16} className="text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  Near ITI Signal, Aundh,<br />Pune, MH 411007
                </address>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={16} className="text-teal flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={16} className="text-teal flex-shrink-0" aria-hidden="true" />
                <span>care@drsulakshane.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm pt-2 border-t border-navy-light">
                <Clock size={16} className="text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="leading-relaxed">
                  <p>Mon–Sat: 10 AM – 1 PM, 5 PM – 8 PM</p>
                  <p className="text-amber-500 mt-0.5">
                    Sun: Closed — Emergency on WhatsApp
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-navy-light text-center text-xs text-slate-600">
          &copy; {currentYear} Dr. Sulakshane Multi Speciality Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
