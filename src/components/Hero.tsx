import { ArrowRight, Phone, Users, Award } from "lucide-react";
import Image from "next/image";

/**
 * Hero — headline + subheadline, stat badges, two CTAs (WhatsApp + Call),
 * and a doctor illustration on the right.
 */
export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20Dr.%20Sulakshane%20Clinic.";

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/40 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Welcome to Dr. Sulakshane Multi Speciality Clinic"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 animate-fade-in-up">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase">
            Trusted Clinic in Aundh, Pune
          </p>

          <h1 className="text-navy font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            Expert Medical Care for Your{" "}
            <span className="text-teal">Entire Family</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
            Comprehensive pediatric &amp; surgical care with 15+ years of
            experience. Personalised attention for every patient — because your
            family deserves the best.
          </p>

          {/* Stat badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <Users size={18} className="text-teal" aria-hidden="true" />
              <span className="text-sm font-semibold text-navy">1 500+ Patients</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <Award size={18} className="text-teal" aria-hidden="true" />
              <span className="text-sm font-semibold text-navy">15+ Years</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal text-white px-7 py-3.5 rounded-lg font-semibold shadow-md hover:bg-teal-dark transition-colors active:scale-[.98]"
              aria-label="Book appointment via WhatsApp"
            >
              Book via WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 border-2 border-navy/15 text-navy px-7 py-3.5 rounded-lg font-semibold hover:bg-navy/5 transition-colors active:scale-[.98]"
              aria-label="Call the clinic now"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>

        {/* Right — illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          <Image
            src="/images/hero-doctor-transparent.png"
            alt="Doctors at Dr. Sulakshane Multi Speciality Clinic"
            width={560}
            height={620}
            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
