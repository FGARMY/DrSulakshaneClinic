"use client";

import Link from "next/link";
import { MoveLeft, Activity, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero grid-overlay flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-xl w-full text-center relative z-10">
        <div className="w-20 h-20 glass-float rounded-2xl flex items-center justify-center mx-auto mb-8 text-white">
          <Activity size={40} />
        </div>
        
        <h1 className="text-8xl font-display font-black text-white/10 mb-4">404</h1>
        
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-blue-100/70 font-light leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-slate-50 transition-all active:scale-95"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto glass-float text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
          >
            <MoveLeft size={20} />
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
