import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dr. Sulakshane Clinic | Expert Surgical & Pediatric Care",
  description: "Advanced laparoscopic surgery and expert pediatric care in Pune. 23+ years of experience. Trusted by 15,000+ patients. Book your consultation today.",
  keywords: ["Laparoscopic Surgery", "Pediatrician", "General Surgeon", "Breast Surgery", "Dr. Sulakshane Clinic", "Pune Healthcare"],
  openGraph: {
    title: "Dr. Sulakshane Clinic | Expert Surgical & Pediatric Care",
    description: "Specialized surgical interventions and comprehensive pediatric management by Dr. Swati & Dr. Mahesh Sulakshane.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Sulakshane Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sulakshane Clinic | Expert Surgical & Pediatric Care",
    description: "23+ years of excellence in surgical and child care.",
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
      className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans scroll-smooth`}
    >
      <body className="antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
