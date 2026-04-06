import { ShieldCheck, Minimize2, Heart, Clock } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Qualified Specialists",
      desc: "MBBS, DNB, and DCH qualified doctors with training from top medical institutions and international exposure.",
      icon: <ShieldCheck size={28} />,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Minimally Invasive",
      desc: "Advanced laparoscopic techniques for faster recovery, less pain, and better surgical outcomes.",
      icon: <Minimize2 size={28} />,
      color: "bg-green-50 text-green-600 border-green-100"
    },
    {
      title: "Compassionate Care",
      desc: "Patient-friendly consultations with detailed explanations and a warm, family-oriented approach to treatment.",
      icon: <Heart size={28} />,
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "23+ Years Experience",
      desc: "Over two decades of trusted medical practice with 15,000+ successfully treated patients and 99% satisfaction.",
      icon: <Clock size={28} />,
      color: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-slate-50 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 block"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Your Family's Health, Our Mission
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Decades of experience, cutting-edge techniques, and a patient-first approach that families trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, idx) => (
            <div key={idx} className="flex gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center border-2 ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
