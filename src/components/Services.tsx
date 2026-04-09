"use client";

import { useState } from "react";
import {
  Stethoscope,
  Scissors,
  Syringe,
  Apple,
  ShieldPlus,
  ChevronDown,
} from "lucide-react";

/**
 * Services — 3-column responsive grid with expandable descriptions.
 * Each card opens/closes a 3-sentence description on click.
 */

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  summary: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Pediatrics",
    icon: <Stethoscope size={26} aria-hidden="true" />,
    summary: "Complete child healthcare from newborn to adolescent.",
    description:
      "Our paediatric services cover growth monitoring, developmental assessments, and management of acute and chronic childhood illnesses. We follow evidence-based protocols to ensure your child receives the best possible care. Regular milestone tracking and early intervention are key to healthy development.",
  },
  {
    title: "General Surgery",
    icon: <Scissors size={26} aria-hidden="true" />,
    summary: "Expert surgical care with minimally invasive options.",
    description:
      "Dr. Swati Sulakshane performs a wide spectrum of general and laparoscopic surgeries including hernia repair, gallbladder removal, and appendectomy. Minimally invasive techniques mean smaller incisions, less pain, and faster recovery. Every procedure is backed by 15+ years of surgical experience.",
  },
  {
    title: "Vaccination",
    icon: <Syringe size={26} aria-hidden="true" />,
    summary: "IAP-recommended immunisation for all age groups.",
    description:
      "We provide the complete vaccination schedule as recommended by the Indian Academy of Pediatrics (IAP). Our cold-chain storage ensures vaccine potency and safety at all times. Both routine and optional vaccines are available, with detailed counselling for parents.",
  },
  {
    title: "Child Nutrition",
    icon: <Apple size={26} aria-hidden="true" />,
    summary: "Personalised dietary plans for growing children.",
    description:
      "Proper nutrition is the foundation of a child's physical and cognitive development. We create age-appropriate dietary plans tailored to your child's unique needs and preferences. Our guidance covers breastfeeding, weaning, and managing common nutritional deficiencies.",
  },
  {
    title: "Preventive Care",
    icon: <ShieldPlus size={26} aria-hidden="true" />,
    summary: "Proactive health screenings and wellness checks.",
    description:
      "Prevention is better than cure. Our preventive care programme includes routine health screenings, risk-factor assessments, and lifestyle counselling. Early detection of potential issues helps us intervene before they become serious, saving time, cost, and worry.",
  },
];

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setExpandedIdx(expandedIdx === idx ? null : idx);

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-3">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4"
          >
            Our Services
          </h2>
          <p className="text-slate-500 leading-relaxed">
            From paediatric care to advanced surgery — everything your family
            needs, all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {SERVICES.map((s, idx) => {
            const isOpen = expandedIdx === idx;
            return (
              <button
                key={s.title}
                onClick={() => toggle(idx)}
                className={`text-left bg-white border rounded-xl p-6 transition-all duration-300 hover:shadow-md group ${
                  isOpen ? "border-teal shadow-md" : "border-slate-200"
                }`}
                aria-expanded={isOpen}
                aria-controls={`service-desc-${idx}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isOpen
                      ? "bg-teal text-white"
                      : "bg-teal-50 text-teal group-hover:bg-teal group-hover:text-white"
                  }`}
                >
                  {s.icon}
                </div>

                <h3 className="font-bold text-navy text-lg mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.summary}
                </p>

                {/* Expand indicator */}
                <div className="flex items-center gap-1 text-teal text-xs font-semibold mt-3">
                  {isOpen ? "Show less" : "Read more"}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Expandable description */}
                <div
                  id={`service-desc-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  role="region"
                >
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {s.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
