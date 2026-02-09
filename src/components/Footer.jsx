import { GraduationCap, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* LOGO & ABOUT */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-deep-blue font-extrabold text-2xl mb-6">
              <GraduationCap className="text-neo-mint" size={32} />
              <span>Yaham Hub</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
              Yaham Hub ni mfumo wa kitalamu wa AI uliotengenezwa mahususi kuwasaidia vijana kufikia ndoto zao za kimasomo na ajira duniani kote.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-neo-mint transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-neo-mint transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-neo-mint transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-neo-mint transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* SERVICES LINKS */}
          <div>
            <h4 className="font-bold text-deep-blue mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-neo-mint transition-colors">CV Builder</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Interview Prep</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Job Board</a></li>
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h4 className="font-bold text-deep-blue mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-neo-mint transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">WhatsApp Support</a></li>
            </ul>
          </div>

          {/* SOCIAL LINKS - Mobile optimization */}
          <div className="hidden lg:block">
            <h4 className="font-bold text-deep-blue mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-neo-mint transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-neo-mint transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs font-medium">
            © {currentYear} Yaham Hub AI Ecosystem. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}