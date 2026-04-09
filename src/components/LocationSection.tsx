import { MapPin, Clock, Navigation, Phone } from "lucide-react";

/**
 * LocationSection — Google Maps embed for "Near ITI Signal, Aundh, Pune 411007"
 * alongside clinic hours and landmark info.
 */
export default function LocationSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-3">
            Visit Us
          </p>
          <h2
            id="location-heading"
            className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4"
          >
            Find Our Clinic
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Conveniently located in Aundh, Pune — easy to reach from all major areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Map */}
          <div
            className="lg:col-span-2 rounded-xl overflow-hidden border border-slate-200 min-h-[380px]"
            aria-label="Google Maps showing Dr. Sulakshane Clinic location near ITI Signal, Aundh, Pune"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.807!3d18.558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzI4LjgiTiA3M8KwNDgnMjUuMiJF!5e0!3m2!1sen!2sin!4v1649000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Sulakshane Multi Speciality Clinic, Aundh, Pune on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm mb-1">Clinic Address</h4>
                <address className="text-slate-500 text-sm leading-relaxed not-italic">
                  Dr. Sulakshane Multi Speciality Clinic,<br />
                  Near ITI Signal, Aundh,<br />
                  Pune, Maharashtra 411007
                </address>
              </div>
            </div>

            {/* Landmark */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Navigation size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm mb-1">Landmark</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Opposite Medipoint Hospital, near ITI Signal
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm mb-1">Clinic Hours</h4>
                <div className="text-slate-500 text-sm leading-relaxed space-y-0.5">
                  <p>Mon – Sat: 10:00 AM – 1:00 PM</p>
                  <p>Mon – Sat: 5:00 PM – 8:00 PM</p>
                  <p className="text-amber-600 font-medium mt-1">
                    Sunday: Closed for OPD — Emergency guidance on WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm mb-1">Phone</h4>
                <a
                  href="tel:+919876543210"
                  className="text-teal font-semibold text-sm hover:underline"
                  aria-label="Call Dr. Sulakshane Clinic"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=Dr+Sulakshane+Clinic+Aundh+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-teal text-white text-center py-3 rounded-lg font-semibold text-sm hover:bg-teal-dark transition-colors"
              aria-label="Get directions to Dr. Sulakshane Clinic on Google Maps"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
