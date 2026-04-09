import { ShieldCheck, Baby, Clock, Heart } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Experienced Doctors",
      desc: "15+ years of expertise in surgical and pediatric care with exceptional patient outcomes.",
      icon: <ShieldCheck size={28} />,
      gradient: "from-indigo-500 to-purple-500",
      light: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Child-Friendly Care",
      desc: "Warm, gentle approach that puts children at ease. Trusted by 1500+ families in Pune.",
      icon: <Baby size={28} />,
      gradient: "from-emerald-500 to-teal-500",
      light: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Quick Appointments",
      desc: "Minimal wait times with efficient scheduling. Same-day appointments for urgent cases.",
      icon: <Clock size={28} />,
      gradient: "from-amber-500 to-orange-500",
      light: "bg-amber-50 text-amber-600",
    },
    {
      title: "Personalized Treatment",
      desc: "Every patient receives individualized care plans tailored to their unique health needs.",
      icon: <Heart size={28} />,
      gradient: "from-rose-500 to-pink-500",
      light: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section className="section-padding gradient-soft relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Heart size={16} />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Your Family&apos;s Health, Our Priority
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Experience healthcare that puts your comfort and well-being first.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card-strong rounded-3xl p-8 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up cursor-default"
              style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.light} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
