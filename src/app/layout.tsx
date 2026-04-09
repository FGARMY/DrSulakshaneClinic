import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sulakshane Multi Speciality Clinic | Trusted Care in Aundh, Pune",
  description: "Premium pediatric & surgical care in Aundh, Pune. 15+ years of experience. 5.0 rated clinic. Trusted by 1500+ families. Book your appointment today.",
  keywords: ["Clinic in Aundh Pune", "Pediatrician Aundh", "General Surgeon Pune", "Child Specialist Aundh", "Dr. Sulakshane Clinic", "Multi Speciality Clinic Pune", "Vaccination Aundh"],
  openGraph: {
    title: "Dr. Sulakshane Multi Speciality Clinic | Aundh, Pune",
    description: "Trusted pediatric & surgical care for your family. 15+ years of excellence in Aundh, Pune.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Sulakshane Multi Speciality Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sulakshane Multi Speciality Clinic | Aundh, Pune",
    description: "15+ years of trusted medical care for families in Pune.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} font-sans scroll-smooth`}
    >
      <body className="antialiased bg-slate-50 text-slate-800">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl"
        >
          Skip to Content
        </a>
        <ScrollProgress />
        <div id="main-content">
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
