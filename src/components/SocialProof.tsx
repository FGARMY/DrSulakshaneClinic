import { Star } from "lucide-react";

export default function SocialProof() {
  const avatarColors = [
    "bg-indigo-200 text-indigo-700",
    "bg-emerald-200 text-emerald-700",
    "bg-amber-200 text-amber-700",
    "bg-rose-200 text-rose-700",
    "bg-purple-200 text-purple-700",
  ];
  
  const initials = ["RP", "AJ", "SM", "PK", "NR"];

  return (
    <section className="relative z-30 -mt-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card-strong rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Avatars */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {initials.map((initial, i) => (
                <div 
                  key={i} 
                  className={`w-10 h-10 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-bold ${avatarColors[i]}`}
                >
                  {initial}
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-slate-900 text-base sm:text-lg">
              Trusted by 1500+ families in Pune
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm font-semibold text-slate-600 ml-2">5.0 / 5.0</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-slate-200"></div>

          {/* Stat */}
          <div className="text-center">
            <p className="font-display font-bold text-2xl text-indigo-600">15+</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
          </div>

        </div>
      </div>
    </section>
  );
}
