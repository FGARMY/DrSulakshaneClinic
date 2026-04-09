import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <MapPin size={16} />
            Find Us
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Visit Our Clinic
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Conveniently located in Aundh, Pune — easily accessible from all major areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[400px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.807!3d18.558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzI4LjgiTiA3M8KwNDgnMjUuMiJF!5e0!3m2!1sen!2sin!4v1649000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Sulakshane Multi Speciality Clinic Location"
            ></iframe>
          </div>

          {/* Info Card */}
          <div className="glass-card-strong rounded-3xl p-8 flex flex-col justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Clinic Address</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dr. Sulakshane Multi Speciality Clinic,<br/>
                  Near ITI Signal, Aundh,<br/>
                  Pune, Maharashtra 411007
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Clinic Hours</h4>
                <div className="text-slate-500 text-sm leading-relaxed space-y-1">
                  <p>Mon – Sat: 10:00 AM – 1:00 PM</p>
                  <p>Mon – Sat: 5:00 PM – 8:00 PM</p>
                  <p className="text-rose-500 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Navigation size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Landmark</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Near ITI Signal, Opposite Medipoint Hospital, Aundh
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Dr+Sulakshane+Clinic+Aundh+Pune" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white text-center py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 transition-all active:scale-[0.98]"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
