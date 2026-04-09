"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

/**
 * BookingForm — appointment form that pre-fills a WhatsApp message.
 * Fields: Name, Phone, Service (dropdown), Preferred Date (date picker),
 * Preferred Slot (Morning 10-1 / Evening 5-8).
 */

const SLOT_OPTIONS = ["Morning (10 AM – 1 PM)", "Evening (5 PM – 8 PM)"];
const SERVICE_OPTIONS = [
  "Pediatrics",
  "General Surgery",
  "Vaccination",
  "Child Nutrition",
  "Preventive Care",
  "Other",
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* Build human-readable WhatsApp message */
    const msg = [
      `Hi, I'd like to book an appointment.`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service}`,
      `*Preferred Date:* ${date}`,
      `*Preferred Slot:* ${slot}`,
    ].join("%0A");

    window.open(
      `https://wa.me/919876543210?text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* Today's date in YYYY-MM-DD for min attr */
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="py-20 md:py-28 bg-navy relative overflow-hidden"
      aria-labelledby="booking-heading"
    >
      {/* Subtle decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="text-white animate-fade-in-up">
            <p className="text-teal-light font-semibold text-sm tracking-wide uppercase mb-3">
              Schedule a Visit
            </p>
            <h2
              id="booking-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight"
            >
              Book Your Appointment in Seconds
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              Fill in the form and we&apos;ll open a WhatsApp chat with your
              details pre-filled. Or message us directly:
            </p>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-teal text-teal-light px-6 py-3 rounded-lg font-semibold hover:bg-teal/10 transition-colors"
              aria-label="Open WhatsApp chat directly"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <h3 className="font-bold text-xl text-navy mb-6">
              Quick Appointment
            </h3>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="bk-name" className="block text-sm font-medium text-slate-600 mb-1.5">
                Full Name
              </label>
              <input
                id="bk-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="bk-phone" className="block text-sm font-medium text-slate-600 mb-1.5">
                Phone Number
              </label>
              <input
                id="bk-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
              />
            </div>

            {/* Service */}
            <div className="mb-4">
              <label htmlFor="bk-service" className="block text-sm font-medium text-slate-600 mb-1.5">
                Service
              </label>
              <select
                id="bk-service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition appearance-none bg-white"
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="mb-4">
              <label htmlFor="bk-date" className="block text-sm font-medium text-slate-600 mb-1.5">
                Preferred Date
              </label>
              <input
                id="bk-date"
                type="date"
                required
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition"
              />
            </div>

            {/* Slot */}
            <div className="mb-6">
              <label htmlFor="bk-slot" className="block text-sm font-medium text-slate-600 mb-1.5">
                Preferred Slot
              </label>
              <select
                id="bk-slot"
                required
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition appearance-none bg-white"
              >
                <option value="">Select a time slot</option>
                {SLOT_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-teal text-white py-3.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors shadow-md active:scale-[.98]"
              aria-label="Submit appointment request via WhatsApp"
            >
              <Send size={18} aria-hidden="true" />
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
