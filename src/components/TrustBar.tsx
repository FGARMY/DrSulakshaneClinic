import { Star, Users, Award, Clock } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-30 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Star size={28} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900">4.9 / 5.0</h4>
              <p className="text-sm font-medium text-slate-500">Patient Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900">15,000+</h4>
              <p className="text-sm font-medium text-slate-500">Patients Treated</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award size={28} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900">MBBS, DNB, DCH</h4>
              <p className="text-sm font-medium text-slate-500">Qualified Specialists</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock size={28} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900">23+ Years</h4>
              <p className="text-sm font-medium text-slate-500">Of Excellence</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
