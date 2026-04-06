import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-gradient-to-b from-blue-700 via-blue-500 to-slate-50 flex flex-col justify-center overflow-hidden">

      {/* Faint Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Background decorative crosses */}
      <div className="absolute top-[20%] left-[10%] text-white/10 font-light text-6xl pointer-events-none">+</div>
      <div className="absolute bottom-[20%] right-[30%] text-white/10 font-light text-4xl pointer-events-none">+</div>

      {/* Social icons top right */}
      <div className="absolute top-28 right-8 lg:right-12 hidden md:flex items-center gap-3 z-30">
        {['In', 'IG', 'X'].map((social) => (
          <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xs font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
            {social}
          </a>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full flex flex-col lg:flex-row items-center px-6 lg:px-8 pt-32 lg:pt-20 pb-12 lg:pb-0 h-full gap-8 lg:gap-0">

        {/* Left Content */}
        <div className="w-full lg:w-[50%] relative z-20 flex flex-col gap-8">

          <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            #1 Trusted Clinic in the City
          </div>

          <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            We bring professional <br />
            <span className="text-indigo-100/90 font-medium">medical support.</span>
          </h1>

          <p className="text-indigo-50/80 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Delivering comprehensive surgical and pediatric care through our innovative approach that seamlessly connects your health needs.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#services" className="px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white/50 w-full sm:w-auto text-center flex items-center justify-center gap-2 group">
              Out Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#appointments" className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-slate-900/50 shadow-xl w-full sm:w-auto text-center">
              Book Appointment
            </Link>
          </div>

          {/* Trusted By Social Proof */}
          <div className="flex items-center gap-4 mt-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-600 bg-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                  <img 
                    src={`https://i.pravatar.cc/150?u=clinic-${i}`} 
                    alt={`Patient ${i}`} 
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-600 bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">
                15K+
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white font-bold ml-1 text-sm tracking-tight text-shadow-sm">4.9/5.0</span>
              </div>
              <p className="text-white/60 text-xs font-light">Trusted by 15,000+ Audience</p>
            </div>
          </div>

        </div>

        {/* Right Content - Doctor Image */}
        <div className="w-full lg:w-1/2 h-full relative lg:absolute lg:right-0 bottom-0 flex items-end justify-end pointer-events-none z-10">
          <div className="relative w-full h-[70vh] lg:h-[110vh] flex items-end justify-end lg:-mr-20">
            <div className="relative w-full h-full flex items-end justify-end [mask-image:linear-gradient(to_top,transparent_0%,black_15%)]">
              <Image
                src="/images/updated-doctors-hero.png"
                alt="Dr. Sulakshane & Specialist"
                width={1600}
                height={1200}
                className="w-auto h-full object-contain object-bottom drop-shadow-[0_20px_70px_rgba(37,99,235,0.35)] z-20 scale-125 lg:scale-150 origin-bottom pointer-events-auto transition-all duration-1000 hover:scale-[1.55]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
