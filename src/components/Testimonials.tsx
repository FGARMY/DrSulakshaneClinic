"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonials — horizontal carousel (5 slots) with star rating,
 * patient name, optional photo initial, and navigation arrows.
 */

interface Review {
  text: string;
  author: string;
  initials: string;
  stars: number;
}

const REVIEWS: Review[] = [
  {
    text: "Dr. Swati performed my laparoscopic surgery. I was walking the next day — her skill is remarkable. The whole team made me feel safe.",
    author: "Rekha P.",
    initials: "RP",
    stars: 5,
  },
  {
    text: "Dr. Mahesh is the best paediatrician we've ever visited. My daughter actually looks forward to check-ups now!",
    author: "Amit J.",
    initials: "AJ",
    stars: 5,
  },
  {
    text: "Having both a surgeon and paediatrician in one clinic is incredibly convenient. Both doctors are thorough and caring.",
    author: "Sunita M.",
    initials: "SM",
    stars: 5,
  },
  {
    text: "The vaccination process was smooth and well-organised. Dr. Mahesh explained everything clearly — no unnecessary medications.",
    author: "Priya K.",
    initials: "PK",
    stars: 5,
  },
  {
    text: "I came in for a hernia consultation. Dr. Swati explained the laparoscopic option clearly and the surgery was flawless. Highly recommend!",
    author: "Nilesh R.",
    initials: "NR",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-3">
            Patient Stories
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4"
          >
            What Families Say
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Real feedback from patients who trust us with their health.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 min-h-[220px] flex flex-col items-center text-center transition-all"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${current + 1} of ${REVIEWS.length}`}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-5" aria-label={`${REVIEWS[current].stars} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < REVIEWS[current].stars
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-200"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-navy text-base sm:text-lg leading-relaxed mb-6 italic max-w-xl">
              &ldquo;{REVIEWS[current].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal font-bold text-sm flex items-center justify-center">
                {REVIEWS[current].initials}
              </div>
              <span className="font-semibold text-navy text-sm">
                {REVIEWS[current].author}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-teal w-6" : "bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
