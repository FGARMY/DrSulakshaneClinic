import { Scissors, Baby, Ribbon, Syringe, Scan, HeartPulse } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Laparoscopic Surgery",
      desc: "Minimally invasive surgical procedures with faster recovery, less pain, and smaller incisions for optimal outcomes.",
      icon: <Scissors size={28} />,
      color: "bg-blue-50 text-blue-600",
      delay: "0"
    },
    {
      title: "Pediatric Care",
      desc: "Complete child healthcare including growth monitoring, developmental assessments, and routine health checkups.",
      icon: <Baby size={28} />,
      color: "bg-green-50 text-green-600",
      delay: "100"
    },
    {
      title: "Breast Surgery",
      desc: "Expert breast surgical procedures including lump excision, biopsy, and comprehensive breast health management.",
      icon: <Ribbon size={28} />,
      color: "bg-purple-50 text-purple-600",
      delay: "200"
    },
    {
      title: "Vaccination & Immunization",
      desc: "Complete vaccination schedules for infants, children, and adolescents following latest medical guidelines.",
      icon: <Syringe size={28} />,
      color: "bg-orange-50 text-orange-600",
      delay: "300"
    },
    {
      title: "GI & Colorectal Procedures",
      desc: "Advanced gastrointestinal and colorectal surgical interventions with precise diagnostics and expert care.",
      icon: <Scan size={28} />,
      color: "bg-red-50 text-red-600",
      delay: "400"
    },
    {
      title: "General Surgery",
      desc: "Comprehensive surgical care for hernias, appendicitis, gallbladder issues, and other common surgical conditions.",
      icon: <HeartPulse size={28} />,
      color: "bg-teal-50 text-teal-600",
      delay: "500"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-slate-50 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 block"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive Care for the Whole Family
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            From advanced laparoscopic surgery to expert pediatric care — we provide a full spectrum of medical services under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
