import { Award, Star, Stethoscope } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 px-4 sm:px-6 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 block"></span>
            Our Doctors
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Meet the Experts Behind Your Care
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            A husband-wife duo of specialists with decades of experience, dedicated to your family's health and well-being.
          </p>
        </div>

        {/* Doctor Duo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Dr. Swati */}
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-shadow duration-300">
            <div className="sm:w-2/5 relative bg-indigo-100 min-h-[300px] sm:min-h-full flex items-end justify-center pt-8 overflow-hidden">
              <Image 
                src="/images/doctor-2.png" 
                alt="Dr. Swati Sulakshane" 
                width={400} 
                height={500} 
                className="w-[90%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                <Award size={14} className="text-indigo-600" />
                23+ Years
              </div>
            </div>
            <div className="sm:w-3/5 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-2xl text-slate-900">Dr. Swati Sulakshane</h3>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md text-xs font-bold">
                  <Star size={12} className="fill-amber-500" />
                  99%
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-4">MBBS, DNB — General Surgery</p>
              
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg text-sm font-semibold w-fit mb-5">
                <Stethoscope size={16} />
                Laparoscopic & General Surgeon
              </div>

              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                A highly experienced surgeon known for precise, minimally invasive procedures and compassionate patient care. Trained at leading institutions and internationally exposed.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Laparoscopic Surgery", "Pediatric Surgery", "Breast Surgery", "GI & Colorectal"].map(tag => (
                  <span key={tag} className="text-xs font-medium border border-slate-200 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dr. Mahesh */}
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-shadow duration-300">
            <div className="sm:w-2/5 relative bg-emerald-100 min-h-[300px] sm:min-h-full flex items-end justify-center pt-8 overflow-hidden">
              <Image 
                src="/images/doctor-1.png" 
                alt="Dr. Mahesh Sulakshane" 
                width={400} 
                height={500} 
                className="w-[90%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                <Award size={14} className="text-emerald-600" />
                22+ Years
              </div>
            </div>
            <div className="sm:w-3/5 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-2xl text-slate-900">Dr. Mahesh Sulakshane</h3>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md text-xs font-bold">
                  <Star size={12} className="fill-amber-500" />
                  99%
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-4">MBBS, DCH</p>
              
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-sm font-semibold w-fit mb-5">
                <Stethoscope size={16} />
                Pediatrician
              </div>

              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                A trusted pediatrician known for patient-friendly consultations and accurate diagnosis. Parents consistently highlight his calm approach and detailed explanations.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Child Growth", "Vaccination", "Child Nutrition", "Infections"].map(tag => (
                  <span key={tag} className="text-xs font-medium border border-slate-200 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
