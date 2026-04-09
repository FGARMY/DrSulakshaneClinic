import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Doctors from "@/components/Doctors";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

/**
 * Home — single-page layout composing all sections.
 * Includes Schema.org MedicalClinic structured data for local SEO.
 */
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. Sulakshane Multi Speciality Clinic",
    image: "https://drsulakshane.com/logo.png",
    url: "https://drsulakshane.com",
    telephone: "+919876543210",
    email: "care@drsulakshane.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near ITI Signal, Aundh",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.558,
      longitude: 73.807,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: ["Surgery", "Pediatrics"],
    availableService: [
      { "@type": "MedicalProcedure", name: "Pediatrics" },
      { "@type": "MedicalProcedure", name: "General Surgery" },
      { "@type": "MedicalProcedure", name: "Laparoscopic Surgery" },
      { "@type": "MedicalProcedure", name: "Vaccination" },
      { "@type": "MedicalProcedure", name: "Child Nutrition Counselling" },
      { "@type": "MedicalProcedure", name: "Preventive Care" },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Dr. Swati Sulakshane",
        jobTitle: "General & Laparoscopic Surgeon",
        description: "MBBS, DNB — 15+ years experience",
      },
      {
        "@type": "Person",
        name: "Dr. Mahesh Sulakshane",
        jobTitle: "Pediatrician & Child Specialist",
        description: "MBBS, DCH — 15+ years experience",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1500",
      bestRating: "5",
    },
  };

  return (
    <>
      <Script
        id="json-ld-medical-clinic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Doctors />
        <Services />
        <Testimonials />
        <BookingForm />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
