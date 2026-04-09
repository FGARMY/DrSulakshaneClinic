import Image from "next/image";

/**
 * Doctors — two glass-style cards showing each doctor's portrait,
 * credentials, specialisation tags, MMC registration, and a CTA.
 */

interface DoctorInfo {
  name: string;
  degree: string;
  specialisation: string;
  tags: string[];
  mmcReg: string;
  image: string;
  whatsapp: string;
}

const DOCTORS: DoctorInfo[] = [
  {
    name: "Dr. Swati Sulakshane",
    degree: "MBBS, DNB — General Surgery",
    specialisation: "General & Laparoscopic Surgeon",
    tags: ["Laparoscopic Surgery", "General Surgery", "Breast Surgery", "GI & Colorectal"],
    mmcReg: "MMC Reg. No. XXXXX",
    image: "/images/doctor-2.png",
    whatsapp:
      "https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20with%20Dr.%20Swati%20Sulakshane.",
  },
  {
    name: "Dr. Mahesh Sulakshane",
    degree: "MBBS, DCH",
    specialisation: "Pediatrician & Child Specialist",
    tags: ["Pediatrics", "Vaccination", "Child Nutrition", "Newborn Care"],
    mmcReg: "MMC Reg. No. XXXXX",
    image: "/images/doctor-1.png",
    whatsapp:
      "https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20with%20Dr.%20Mahesh%20Sulakshane.",
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="doctors-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-3">
            Our Specialists
          </p>
          <h2
            id="doctors-heading"
            className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4"
          >
            Meet Your Doctors
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A husband-and-wife team combining surgical precision with
            compassionate paediatric care — all under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doc) => (
            <article
              key={doc.name}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-2/5 bg-gradient-to-br from-teal-50 to-slate-100 flex items-end justify-center pt-6 min-h-[240px] relative">
                  <Image
                    src={doc.image}
                    alt={`Portrait of ${doc.name}`}
                    width={280}
                    height={340}
                    className="w-[80%] h-auto object-contain object-bottom"
                  />
                </div>

                {/* Info */}
                <div className="sm:w-3/5 p-6 flex flex-col">
                  <h3 className="font-bold text-xl text-navy">{doc.name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{doc.degree}</p>
                  <p className="text-teal font-semibold text-sm mt-2">
                    {doc.specialisation}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {doc.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-teal-50 text-teal-dark px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* MMC Reg */}
                  <p className="text-xs text-slate-400 mt-4">{doc.mmcReg}</p>

                  {/* CTA */}
                  <a
                    href={doc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center bg-teal text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-teal-dark transition-colors"
                    aria-label={`Book an appointment with ${doc.name} via WhatsApp`}
                  >
                    Book with {doc.name.split(" ")[0]}.{" "}
                    {doc.name.split(" ").slice(1).join(" ").charAt(0)}.
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
