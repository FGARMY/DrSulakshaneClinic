import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Sulakshane Multi Speciality Clinic | Aundh, Pune",
  description:
    "Trusted pediatric & surgical care in Aundh, Pune. Dr. Swati Sulakshane (General & Laparoscopic Surgeon) and Dr. Mahesh Sulakshane (Pediatrician). 15+ years experience. Book your appointment today.",
  keywords: [
    "Clinic in Aundh Pune",
    "Pediatrician Aundh",
    "General Surgeon Pune",
    "Laparoscopic Surgery Aundh",
    "Child Specialist Pune",
    "Dr. Sulakshane",
    "Multi Speciality Clinic Pune",
  ],
  openGraph: {
    title: "Dr. Sulakshane Multi Speciality Clinic | Aundh, Pune",
    description:
      "Trusted pediatric & surgical care by Dr. Swati & Dr. Mahesh Sulakshane. 15+ years, 1500+ families.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Sulakshane Multi Speciality Clinic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="antialiased bg-white text-navy">{children}</body>
    </html>
  );
}
