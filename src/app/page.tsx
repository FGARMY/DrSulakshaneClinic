import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Sulakshane Clinic",
    "image": "https://drsulakshane.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near XYZ Square",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Doctors />
      <WhyUs />
      <Resources />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
