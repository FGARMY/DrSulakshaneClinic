import { ArrowRight, Star, HeartPulse, ShieldPlus, Activity, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-gradient-to-b from-blue-700 via-blue-600 to-slate-50 flex flex-col justify-center overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Animated Light Leaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10000ms]"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Floating Medical Particles */}
      <div className="absolute top-[15%] left-[5%] text-white/10 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '0s' }}>
        <HeartPulse size={48} />
      </div>
      <div className="absolute top-[60%] left-[40%] text-white/5 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '2s' }}>
        <Activity size={32} />
      </div>
      <div className="absolute top-[20%] right-[15%] text-white/10 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '4s' }}>
        <ShieldPlus size={40} />
      </div>
      
      {/* Decorative Crosses */}
      <div className="absolute top-[25%] left-[12%] text-white/20 font-light text-6xl pointer-events-none select-none opacity-50">+</div>
      <div className="absolute bottom-[35%] left-[30%] text-white/10 font-light text-4xl pointer-events-none select-none opacity-30">+</div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full flex flex-col lg:flex-row items-center px-6 lg:px-12 pt-32 lg:pt-20 pb-12 lg:pb-0 h-full gap-12 lg:gap-0">
          
        {/* Left Content */}
        <div className="w-full lg:w-[50%] relative z-20 flex flex-col gap-10">
          
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full inline-flex items-center w-fit shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 mr-3 animate-pulse ring-4 ring-green-400/20"></span>
            #1 TRUSTED CLINIC IN THE CITY
            <Sparkles size={14} className="ml-2 text-amber-300" />
          </div>

          <div className="flex flex-col gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              We bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">professional</span> <br />
              medical <span className="italic font-light opacity-90">support.</span>
            </h1>
            
            <p className="text-blue-50/70 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Delivering comprehensive surgical and pediatric care through our innovative approach that seamlessly connects your health needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link href="#appointments" className="px-10 py-4.5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2 group transform active:scale-95">
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="px-10 py-4.5 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-all w-full sm:w-auto text-center hover:shadow-lg">
              Explore Services
            </Link>
          </div>

          {/* Minimal Social Proof Badge */}
          <div className="flex items-center gap-4 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex -space-x-3 overflow-hidden p-0.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-500 bg-white/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                  <img 
                    src={`https://i.pravatar.cc/150?u=medical-user-${i}`} 
                    alt={`Patient ${i}`} 
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-amber-500 text-amber-500" />
                ))}
                <span className="text-slate-900 font-bold ml-1 text-xs">4.9/5.0</span>
              </div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5">15K+ Happy Patients</p>
            </div>
          </div>

        </div>

        {/* Right Content - Optimized Doctor Image */}
        <div className="w-full lg:w-1/2 h-full relative lg:absolute lg:right-0 bottom-0 flex items-end justify-end pointer-events-none z-10">
          <div className="relative w-full h-[70vh] lg:h-[115vh] flex items-end justify-end lg:-mr-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full h-full flex items-end justify-end [mask-image:linear-gradient(to_top,transparent_0%,black_10%)]">
              <Image
                src="/images/updated-doctors-hero.png"
                alt="Dr. Sulakshane & Specialized Team"
                width={1600}
                height={1200}
                className="w-auto h-[95%] lg:h-full object-contain object-bottom drop-shadow-[0_20px_100px_rgba(37,99,235,0.35)] z-20 scale-125 lg:scale-[1.65] origin-bottom pointer-events-auto transition-all duration-[1200ms] ease-out hover:scale-[1.7] animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50 text-white animate-bounce pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
}
