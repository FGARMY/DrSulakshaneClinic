"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const faqs = [
    {
      q: "What services does Dr. Swati Sulakshane offer?",
      a: "Dr. Swati specializes in Laparoscopic Surgery, General Surgery, Pediatric Surgery, Breast Surgery, and GI & Colorectal Procedures. She is known for minimally invasive techniques that ensure faster recovery and less post-operative discomfort."
    },
    {
      q: "At what age should I bring my child for routine checkups?",
      a: "Dr. Mahesh recommends regular pediatric checkups from birth. Key milestones include visits at 1, 2, 4, 6, 9, 12, 15, and 18 months, followed by annual visits. These checkups track growth, development, and ensure timely vaccinations."
    },
    {
      q: "How do I book an appointment?",
      a: "You can book an appointment by calling our clinic directly, visiting us in person, or clicking the 'Book Appointment' button on this website. We strive to accommodate urgent cases on the same day whenever possible."
    },
    {
      q: "What is laparoscopic surgery and is it safe?",
      a: "Laparoscopic surgery is a minimally invasive technique that uses small incisions and a camera to perform procedures. It is very safe, offers faster recovery, minimal scarring, less pain, and shorter hospital stays compared to traditional open surgery."
    },
    {
      q: "Do you handle emergency cases?",
      a: "Yes, both Dr. Swati and Dr. Mahesh are available for emergency consultations. Dr. Mahesh is particularly known for his availability during pediatric emergencies. Please call our clinic number directly for urgent cases."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-white dark:bg-[#020617] relative transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 block"></span>
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Find answers to common questions about our clinic, services, and appointments.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen 
                    ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-500/30 shadow-[0_10px_30px_rgba(79,70,229,0.06)] scale-[1.01]' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-bold text-lg md:text-xl transition-colors duration-500 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen 
                      ? 'bg-indigo-600 text-white rotate-180' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 pb-8 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 -translate-y-4'
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-base md:text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
