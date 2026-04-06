import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dr. Sulakshane Clinic — Expert Surgical & Child Care",
  description: "Comprehensive surgical and pediatric care under one roof. With 20+ years of combined expertise, Dr. Swati & Dr. Mahesh Sulakshane deliver compassionate, world-class healthcare.",
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
        {children}
      </body>
    </html>
  );
}
