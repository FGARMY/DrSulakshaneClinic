import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Doctors from "@/components/Doctors";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Sulakshane Multi Speciality Clinic",
    "image": "https://drsulakshane.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near ITI Signal, Aundh",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411007",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "url": "https://drsulakshane.com",
    "medicalSpecialty": ["Surgery", "Pediatrics"],
    "founder": [
      {
        "@type": "Person",
        "name": "Dr. Swati Sulakshane"
      },
      {
        "@type": "Person",
        "name": "Dr. Mahesh Sulakshane"
      }
    ]
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <SocialProof />
      <Doctors />
      <WhyUs />
      <Services />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
    </main>
  );
}
