"use client";

import { CalendarPlus, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="appointment" className="section-padding gradient-cta grid-overlay relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left — CTA Text */}
          <div className="text-center lg:text-left opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 glass-float text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider mb-8">
              <CalendarPlus size={14} />
              Book in Seconds
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Book your appointment{" "}
              <span className="text-blue-200">in seconds</span>
            </h2>
            <p className="text-blue-100/70 text-lg font-light mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Skip the wait. Fill in the form or reach us directly on WhatsApp. We&apos;ll confirm your slot instantly.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-float text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
            >
              <MessageCircle size={22} />
              Book via WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card-strong rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
                Quick Appointment
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="apt-name" className="text-sm font-semibold text-slate-600">Full Name</label>
                  <input 
                    id="apt-name"
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="apt-phone" className="text-sm font-semibold text-slate-600">Phone Number</label>
                  <input 
                    id="apt-phone"
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="apt-service" className="text-sm font-semibold text-slate-600">Service</label>
                  <select 
                    id="apt-service"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none text-slate-900"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="surgery">General Surgery</option>
                    <option value="vaccination">Vaccination</option>
                    <option value="nutrition">Child Nutrition</option>
                    <option value="preventive">Preventive Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg text-base ${
                    formState === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-xl active:scale-[0.98]'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <Send size={18} />
                      Book Now
                    </>
                  )}
                  {formState === 'sending' && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  )}
                  {formState === 'success' && 'Appointment Requested! ✓'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
