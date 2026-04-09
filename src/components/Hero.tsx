import { ArrowRight, Phone, Users, HeartHandshake, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] gradient-hero grid-overlay flex items-center overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-32 pb-32 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 lg:min-h-[100dvh]">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-20 flex flex-col gap-6 text-left items-start lg:py-20">
            
            {/* Badge */}
            <div className="glass-float text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center w-fit animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse ring-4 ring-emerald-400/20"></span>
              Trusted Clinic in Aundh, Pune
            </div>
 
            {/* Headline */}
            <div className="flex flex-col gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-white font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] tracking-tight">
                We provide{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  trusted
                </span>{" "}
                medical care for your family.
              </h1>
              
              <p className="text-blue-100/90 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
                15+ years experience &bull; 5.0 rated clinic &bull; Pediatric & Surgical care with personalized attention
              </p>
            </div>
  
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link 
                href="#appointment" 
                className="px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:bg-slate-50 transition-all shadow-2xl text-sm sm:text-base text-center flex items-center justify-center gap-2 group active:scale-95"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="px-8 py-4 rounded-xl glass-float text-white font-bold hover:bg-white/25 transition-all text-sm sm:text-base text-center flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
            </div>

            {/* Floating Stats — Mobile */}
            <div className="flex flex-wrap gap-4 mt-4 lg:hidden animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="glass-float rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">1500+</p>
                  <p className="text-white/60 text-[11px]">Happy Patients</p>
                </div>
              </div>
              <div className="glass-float rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">24/7</p>
                  <p className="text-white/60 text-[11px]">Emergency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content — Doctor Image */}
          <div className="w-full lg:w-1/2 relative flex items-end justify-center z-10">
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <Image
                src="/images/hero-doctor-transparent.png"
                alt="Dr. Sulakshane - Trusted Doctor in Aundh, Pune"
                width={600}
                height={700}
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Floating Glass Cards — Desktop only */}
              <div className="hidden lg:flex absolute top-[10%] -left-12 glass-float rounded-2xl px-4 py-3 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">1500+</p>
                  <p className="text-white/60 text-xs">Happy Patients</p>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute top-[42%] -right-12 glass-float rounded-2xl px-4 py-3 items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">24/7</p>
                  <p className="text-white/60 text-xs">Emergency Guidance</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute bottom-[12%] -left-12 glass-float rounded-2xl px-4 py-3 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">+91 98765 43210</p>
                  <p className="text-white/60 text-xs">Call Anytime</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80L1440 80L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 80Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
