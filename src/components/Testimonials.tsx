import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Dr. Swati performed my laparoscopic surgery and I was back on my feet within days. Her expertise and calm demeanor made the experience stress-free.",
      author: "Rekha Patil",
      role: "Surgery Patient",
      initials: "RP",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      text: "Dr. Mahesh has been our family pediatrician for over 10 years. His patience with children and thorough diagnosis gives us complete peace of mind.",
      author: "Amit Joshi",
      role: "Parent of Two",
      initials: "AJ",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      text: "Having a surgeon and pediatrician under one roof is incredibly convenient. Both doctors are professional and caring. We trust them completely.",
      author: "Sunita Mhatre",
      role: "Family Patient",
      initials: "SM",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section id="testimonials" className="section-padding gradient-hero grid-overlay relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-float text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-lg text-blue-100/70 font-light leading-relaxed">
            Real stories from families who trust us with their health.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-float rounded-3xl p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Quote size={20} className="text-white/60" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/90 font-light leading-relaxed mb-8 flex-grow text-sm sm:text-base">
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm ${rev.color}`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                  <p className="text-sm text-white/50">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
