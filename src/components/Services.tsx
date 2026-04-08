import { Activity, ShieldCheck, ChevronRight, MessageCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01 / SRG",
      title: "Advanced Minimally Invasive Laparoscopy",
      desc: "Specialized surgical interventions utilizing high-definition imaging for reduced trauma, accelerated recovery, and minimal postoperative sequelae.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeOpacity="0.4" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Swati Sulakshane",
      tag: "Surgical Mastery",
      className: "lg:col-span-2 lg:row-span-1",
      delay: "0.1s"
    },
    {
      id: "02 / PED",
      title: "Neonatal & Pediatric Clinical Care",
      desc: "Comprehensive diagnostic and therapeutic management for infants and children, focusing on developmental medicine and preventive protocols.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeOpacity="0.2" />
          <path d="M12 8v8m-4-4h8" />
          <circle cx="12" cy="12" r="3" strokeOpacity="0.4" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Mahesh Sulakshane",
      tag: "Developmental Care",
      className: "lg:col-span-1 lg:row-span-2",
      delay: "0.2s",
      extra: (
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Clinical Protocol</span>
          </div>
          <p className="font-serif italic text-sm text-slate-600 leading-relaxed">
            "We prioritize objective milestone tracking and evidence-based pediatric pathways."
          </p>
        </div>
      )
    },
    {
      id: "03 / ONC",
      title: "Breast Surgical Oncology & Pathology",
      desc: "Precision management of benign and malignant pathologies, including diagnostic excision, reconstruction support, and screening.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 5C8.134 5 5 8.134 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-1.5-.5-2.8-1.4-3.8" strokeOpacity="0.2" />
          <path d="M12 2v6m0 8v6M2 12h6m8 0h6" strokeOpacity="0.4" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Swati Sulakshane",
      tag: "Oncology Focus",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.3s"
    },
    {
      id: "04 / IMM",
      title: "Immunization & Prophylactic Support",
      desc: "Standardized biological prophylactic measures for multi-level immune support following global medical directives.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeOpacity="0.2" />
          <path d="M7 12h10M12 7v10" strokeOpacity="0.4" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Mahesh Sulakshane",
      tag: "Preventive Care",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.4s"
    },
    {
      id: "05 / GAS",
      title: "Gastrointestinal Surgical Pathology",
      desc: "Comprehensive colorectal and GI surgical diagnostics, utilizing advanced visualization for therapeutic accuracy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.2" />
          <path d="M3 12h18M12 3v18" strokeOpacity="0.4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Swati Sulakshane",
      tag: "Colorectal Specialization",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.5s"
    },
    {
      id: "06 / GEN",
      title: "Acute & Elective General Surgery",
      desc: "Therapeutic management of hernias, biliary pathologies, and acute surgical conditions with standardized protocols.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeOpacity="0.2" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      ),
      accent: "text-indigo-950",
      expert: "Dr. Swati Sulakshane",
      tag: "Comprehensive Care",
      className: "lg:col-span-2 lg:row-span-1 flex-row items-center gap-12",
      delay: "0.6s"
    }
  ];

  return (
    <section id="services" className="py-40 px-4 sm:px-6 bg-[#fafafa] relative overflow-hidden grain-texture">
      
      {/* Background - Discrete Registry Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e1b4b 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header - Clinical Registry Style */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-32 gap-16 opacity-0 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-indigo-950"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-indigo-950/40">Clinical Record & Registry</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-indigo-950 leading-[0.95] tracking-tight mb-8">
              Medical <br /> Specializations
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
              <p className="text-lg text-slate-500 font-light max-w-md leading-relaxed">
                A rigorous overview of our surgical and pediatric pathological management standards.
              </p>
            </div>
          </div>
          
          <div className="lg:w-[400px] relative">
            <div className="medical-border bg-white p-8 clinic-shadow rounded-sm relative">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Chief's Memorandum</span>
                <Activity size={16} className="text-slate-200" />
              </div>
              <p className="font-serif italic text-slate-800 leading-relaxed text-base italic mb-6">
                "Clinical precision is underpinned by meticulous observation. Every pathology tells a narrative of health that we are committed to resolving."
              </p>
              <div className="pt-6 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Authenticated By</div>
                <div className="text-sm font-bold text-indigo-950">Swati Sulakshane, M.S. (Gen. Surgery)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Grid - "Case File" Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 medical-border overflow-hidden rounded-sm shadow-2xl shadow-indigo-950/5">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden bg-white p-10 transition-all duration-700 opacity-0 animate-fade-in-up flex flex-col hover:z-10 ${item.className}`}
              style={{ animationDelay: item.delay }}
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-sm opacity-0 animate-fade-in-up" style={{ animationDelay: `calc(${item.delay} + 0.2s)` }}>
                    {item.id}
                  </span>
                  <div className="text-slate-300 group-hover:text-indigo-600 transition-all duration-500 w-10 h-10 opacity-0 animate-scale-in group-hover:scale-110" style={{ animationDelay: `calc(${item.delay} + 0.3s)` }}>
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-indigo-950 mb-6 leading-[1.1] pr-8 group-hover:text-indigo-600 transition-colors duration-500 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 max-w-sm group-hover:text-slate-600 transition-colors">{item.desc}</p>
                  {item.extra}
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-slate-300 tracking-[0.2em] mb-2 group-hover:text-amber-600 transition-colors">Lead Clinician</span>
                    <span className="text-xs font-serif italic text-slate-900">{item.expert}</span>
                  </div>
                  <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-indigo-950 group-hover:text-white group-hover:border-indigo-950 transition-all duration-500 rounded-full">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Footer */}
        <div className="mt-32 flex flex-col items-center justify-center gap-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-[1px] w-24 bg-slate-200"></div>
          <div className="flex flex-wrap justify-center gap-12 text-slate-300">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-amber-500/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Board Certified Protocols</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-slate-200" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Evidence-Based Management</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}




