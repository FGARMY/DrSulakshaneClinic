import { Stethoscope, Scissors, Syringe, Apple, ShieldPlus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Pediatrics",
      desc: "Comprehensive child healthcare from infancy through adolescence, including growth monitoring and developmental assessments.",
      icon: <Stethoscope size={28} />,
      color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    },
    {
      title: "General Surgery",
      desc: "Expert surgical care using modern techniques for hernias, gallbladder, appendix, and other conditions with minimal recovery time.",
      icon: <Scissors size={28} />,
      color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    },
    {
      title: "Vaccination",
      desc: "Complete immunization programs following the latest IAP guidelines. Safe and timely vaccines for all age groups.",
      icon: <Syringe size={28} />,
      color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    },
    {
      title: "Child Nutrition",
      desc: "Personalized dietary guidance and nutrition plans to ensure optimal growth and development for your child.",
      icon: <Apple size={28} />,
      color: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    },
    {
      title: "Preventive Care",
      desc: "Proactive health assessments and screening programs to catch potential issues early and maintain long-term wellness.",
      icon: <ShieldPlus size={28} />,
      color: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Stethoscope size={16} />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive Medical Services
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            From pediatric care to advanced surgical procedures — all under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group glass-card-strong rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-6 ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-light flex-grow mb-6">
                {service.desc}
              </p>
              
              <Link 
                href="#appointment" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group/link"
              >
                Learn More
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
