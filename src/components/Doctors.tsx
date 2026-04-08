import DoctorCard from "./DoctorCard";

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
          
          <DoctorCard 
            name="Dr. Swati Sulakshane"
            image="/images/doctor-2.png"
            experience="23+ Years"
            rating="99%"
            qualification="MBBS, DNB — General Surgery"
            specialization="Laparoscopic & General Surgeon"
            description="A highly experienced surgeon known for precise, minimally invasive procedures and compassionate patient care. Trained at leading institutions and internationally exposed."
            tags={["Laparoscopic Surgery", "Pediatric Surgery", "Breast Surgery", "GI & Colorectal"]}
            themeColor="indigo"
            delay="0.2s"
          />

          <DoctorCard 
            name="Dr. Mahesh Sulakshane"
            image="/images/doctor-1.png"
            experience="22+ Years"
            rating="99%"
            qualification="MBBS, DCH"
            specialization="Pediatrician"
            description="A trusted pediatrician known for patient-friendly consultations and accurate diagnosis. Parents consistently highlight his calm approach and detailed explanations."
            tags={["Child Growth", "Vaccination", "Child Nutrition", "Infections"]}
            themeColor="emerald"
            delay="0.4s"
          />

        </div>
      </div>
    </section>
  );
}
