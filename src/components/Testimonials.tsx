import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Dr. Swati performed my laparoscopic surgery and I was back on my feet within days. Her expertise and calm demeanor made the whole experience much less stressful than I expected.",
      author: "Rekha Patil",
      role: "Surgery Patient",
      initials: "RP",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      text: "Dr. Mahesh has been our family pediatrician for over 10 years. His patience with children and thorough approach to diagnosis gives us complete peace of mind as parents.",
      author: "Amit Joshi",
      role: "Parent of Two",
      initials: "AJ",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      text: "Both doctors are incredibly professional and caring. Having a surgeon and pediatrician under one roof is so convenient. We trust them completely with our whole family's health.",
      author: "Sunita Mhatre",
      role: "Family Patient",
      initials: "SM",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-slate-50 relative">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 block"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Real stories from families who trust us with their health.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] relative flex flex-col group hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1"
            >

              {/* Quote mark decoration */}
              <div className="absolute top-4 right-8 text-8xl text-slate-50 font-serif leading-none italic select-none pointer-events-none group-hover:text-slate-100 transition-colors duration-500">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-8 relative z-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 font-light leading-relaxed mb-10 flex-grow relative z-10 italic">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold font-display shadow-sm transition-transform group-hover:scale-110 ${rev.color}`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{rev.author}</h4>
                  <p className="text-sm text-slate-500 font-light">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
