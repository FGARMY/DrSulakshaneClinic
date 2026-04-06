import { CalendarPlus, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="appointment" className="py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-indigo-600/30 relative overflow-hidden">
          
          {/* Decorative faint background shapes */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Your Health Can't Wait — Book Today
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl font-light mb-10 leading-relaxed">
              Whether it's a surgical consultation or your child's checkup, our experts are ready to help. Schedule your visit now.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <CalendarPlus size={20} />
                Book Appointment Now
              </a>
              <a href="tel:+911234567890" className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <PhoneCall size={20} />
                Call Us Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
