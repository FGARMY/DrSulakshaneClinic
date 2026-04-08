"use client";

import { BookOpen, FileText, Play, Apple, AlertCircle, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

const RESOURCES = [
  {
    id: "guide-01",
    type: "Guide",
    title: "Complete Vaccination Schedule 2024",
    desc: "A year-by-year breakdown of essential vaccinations for infants and children to ensure long-term health.",
    icon: <BookOpen size={24} />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    size: "lg:col-span-2 lg:row-span-2",
    delay: "0.1s"
  },
  {
    id: "article-01",
    type: "Article",
    title: "Post-Surgery Care at Home",
    desc: "Expert tips for faster recovery after general or laparoscopic surgery.",
    icon: <FileText size={20} />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    size: "lg:col-span-1 lg:row-span-1",
    delay: "0.2s"
  },
  {
    id: "video-01",
    type: "Video",
    title: "Understanding Laparoscopy",
    desc: "A brief visualization of how minimally invasive surgery works.",
    icon: <Play size={20} />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    size: "lg:col-span-1 lg:row-span-1",
    delay: "0.3s"
  },
  {
    id: "tips-01",
    type: "Tips",
    title: "Child Nutrition & Growth",
    desc: "Essential nutrients your child needs at every stage of development.",
    icon: <Apple size={20} />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    size: "lg:col-span-1 lg:row-span-1",
    delay: "0.4s"
  },
  {
    id: "alert-01",
    type: "Emergency",
    title: "First Aid Basics",
    desc: "What every parent should know before reaching the emergency room.",
    icon: <AlertCircle size={20} />,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    size: "lg:col-span-1 lg:row-span-1",
    delay: "0.5s"
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-4 sm:px-6 bg-white dark:bg-[#020617] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} className="animate-pulse" />
              Patient Resources
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Knowledge for a <span className="text-primary italic">Healthier</span> Family
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Explore our curated library of medical guides, video insights, and wellness tips designed to help you make informed health decisions.
            </p>
          </div>
          <Link href="#all-resources" className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group">
            View All Resources
            <ChevronRight size={20} className="group-hover:scale-110" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((item) => (
            <div 
              key={item.id}
              className={`${item.size} group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-500/30 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500 flex flex-col justify-between opacity-0 animate-fade-in-up`}
              style={{ animationDelay: item.delay }}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-transform group-hover:scale-110 ${item.color.replace('bg-', 'bg-opacity-50 dark:bg-opacity-20 bg-')}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4 ${item.size.includes('lg:col-span-2') ? 'text-3xl' : 'text-xl'}`}>
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              
              <Link href={`#${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-primary transition-colors mt-auto group/btn">
                Read More
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
