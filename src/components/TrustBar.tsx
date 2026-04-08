import { Star, Users, Award, Clock } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-30 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Star size={24} className="group-hover:fill-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 leading-tight">4.9 / 5.0</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Patient Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 leading-tight">15k+ Patients</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Treated Yearly</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 leading-tight">Specialists</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">MBBS, DNB, DCH</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 leading-tight">23+ Years</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Proven Excellence</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
