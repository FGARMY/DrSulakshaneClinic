"use client";

import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Mock sending
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Decals */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
              Get in Touch with Our <span className="text-primary italic">Specialists</span>
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-12 max-w-lg">
              Have questions or need to schedule an appointment? We're here to help. Reach out through the form or our contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Clinic Address</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Dr. Sulakshane Clinic, Plot 42,<br />
                    Medical Square, Pune, MH 411001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    +91 98765 43210 (General Queries)<br />
                    +91 12345 67890 (Emergency)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    care@drsulakshane.com<br />
                    appointments@drsulakshane.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(15,23,42,0.05)] border border-slate-100 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="Care@example.com" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="appointment">Book an Appointment</option>
                  <option value="surgery">Surgical Consultation</option>
                  <option value="pediatric">Pediatric Inquiry</option>
                  <option value="general">General Query</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4} 
                  placeholder="How can we help you?" 
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                  formState === 'success' 
                    ? 'bg-emerald-500 text-white shadow-emerald-200' 
                    : 'bg-primary text-white shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 active:scale-95'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Your Message
                  </>
                )}
                {formState === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent Successfully
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
