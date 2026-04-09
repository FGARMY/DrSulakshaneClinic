import { Award, Stethoscope, Star, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Swati Sulakshane",
      image: "/images/doctor-2.png",
      qualification: "MBBS, DNB — General Surgery",
      specialization: "Laparoscopic & General Surgeon",
      experience: "15+ Years",
      statement: "Specializing in minimally invasive surgery with over 15 years of experience. Known for precision, compassion, and excellent patient outcomes.",
      tags: ["Laparoscopic Surgery", "General Surgery", "Breast Surgery"],
      color: "from-indigo-500 to-purple-600",
      lightColor: "bg-indigo-50 text-indigo-600"
    },
    {
      name: "Dr. Mahesh Sulakshane",
      image: "/images/doctor-1.png",
      qualification: "MBBS, DCH",
      specialization: "Pediatrician & Child Specialist",
      experience: "15+ Years",
      statement: "A trusted pediatrician loved by families across Pune. Known for patient-friendly consultations and detailed, caring approach to child healthcare.",
      tags: ["Pediatrics", "Vaccination", "Child Nutrition"],
      color: "from-emerald-500 to-teal-600",
      lightColor: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="doctors" className="section-padding bg-slate-50 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Stethoscope size={16} />
            Our Specialists
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Meet the Experts Behind Your Care
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            A husband-wife duo of specialists with decades of experience, dedicated to your family's health.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map((doc, idx) => (
            <div 
              key={doc.name}
              className="glass-card-strong rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className={`sm:w-2/5 relative bg-gradient-to-br ${doc.color} min-h-[280px] flex items-end justify-center pt-6 overflow-hidden`}>
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    width={300} 
                    height={400} 
                    className="w-[85%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                    <Award size={14} className="text-amber-500" />
                    {doc.experience}
                  </div>
                </div>
                
                {/* Info */}
                <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl text-slate-900">{doc.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded-md text-xs font-bold">
                      <Star size={12} className="fill-amber-500" />
                      5.0
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-slate-400 mb-3">{doc.qualification}</p>
                  
                  <div className={`inline-flex items-center gap-2 ${doc.lightColor} px-3 py-1.5 rounded-lg text-sm font-semibold w-fit mb-4`}>
                    <GraduationCap size={16} />
                    {doc.specialization}
                  </div>
                  
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-5">
                    {doc.statement}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium border border-slate-200 text-slate-500 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
