import { HeartPulse, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const SocialIcons = {
  Facebook: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  ),
  Instagram: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  ),
  Youtube: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  )
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-20 pb-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6 group" aria-label="Dr. Sulakshane Clinic Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg" aria-hidden="true">
                <HeartPulse size={20} />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Dr. Sulakshane <span className="font-light text-slate-400">Clinic</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-light mb-8 text-sm">
              Expert surgical and pediatric care for your entire family. Over 23 years of trusted medical practice with compassion at its core.
            </p>
            <nav className="flex items-center gap-4" aria-label="Social Media Links">
              {[SocialIcons.Facebook, SocialIcons.Instagram, SocialIcons.Youtube, SocialIcons.Linkedin].map((Icon, idx) => {
                const names = ["Facebook", "Instagram", "Youtube", "Linkedin"];
                return (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"
                    aria-label={`Visit our ${names[idx]} page`}
                  >
                    <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links Footer">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Doctors', 'About Us', 'FAQ'].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors text-sm font-light" aria-label={`Go to ${link}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services Navigation Footer">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Our Services</h4>
            <ul className="space-y-4">
              {['Laparoscopic Surgery', 'General Surgery', 'Breast Surgery', 'Pediatric Care', 'Vaccination'].map(link => (
                <li key={link}>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm font-light" aria-label={`Learn more about ${link}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <section aria-labelledby="footer-contact-heading">
            <h4 id="footer-contact-heading" className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 text-sm font-light leading-relaxed pt-2">
                  <span className="sr-only">Address: </span>
                  Dr. Sulakshane Clinic,<br/>Your City, India
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400 text-sm font-light leading-relaxed pt-2.5">
                  <span className="sr-only">Phone: </span>
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <span className="text-slate-400 text-sm font-light leading-relaxed pt-2.5">
                  <span className="sr-only">Email: </span>
                  contact@drsulakshane.com
                </span>
              </li>
            </ul>
          </section>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm font-light mt-16">
          <p>&copy; {new Date().getFullYear()} Dr. Sulakshane Clinic. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
