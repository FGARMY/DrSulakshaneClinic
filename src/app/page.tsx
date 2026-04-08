import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Doctors />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
