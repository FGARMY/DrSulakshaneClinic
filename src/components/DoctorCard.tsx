import { Award, Star, Stethoscope, LucideIcon } from "lucide-react";
import Image from "next/image";

interface DoctorCardProps {
  name: string;
  image: string;
  experience: string;
  rating: string;
  qualification: string;
  specialization: string;
  description: string;
  tags: string[];
  themeColor: "indigo" | "emerald";
  delay?: string;
}

export default function DoctorCard({
  name,
  image,
  experience,
  rating,
  qualification,
  specialization,
  description,
  tags,
  themeColor,
  delay = "0s",
}: DoctorCardProps) {
  const isIndigo = themeColor === "indigo";
  
  return (
    <div 
      className="bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className={`sm:w-2/5 relative ${isIndigo ? "bg-indigo-100 dark:bg-indigo-950/50" : "bg-emerald-100 dark:bg-emerald-950/50"} min-h-[300px] sm:min-h-full flex items-end justify-center pt-8 overflow-hidden`}>
        <Image 
          src={image} 
          alt={name} 
          width={400} 
          height={500} 
          className="w-[90%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1">
          <Award size={14} className={isIndigo ? "text-indigo-600 dark:text-indigo-400" : "text-emerald-600 dark:text-emerald-400"} />
          {experience}
        </div>
      </div>
      <div className="sm:w-3/5 p-8 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-slate-100">{name}</h3>
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-md text-xs font-bold">
            <Star size={12} className="fill-amber-500" />
            {rating}
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{qualification}</p>
        
        <div className={`inline-flex items-center gap-2 ${isIndigo ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"} px-3 py-1.5 rounded-lg text-sm font-semibold w-fit mb-5`}>
          <Stethoscope size={16} />
          {specialization}
        </div>
 
        <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed mb-6">
          {description}
        </p>
 
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
