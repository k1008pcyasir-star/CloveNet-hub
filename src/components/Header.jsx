import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onOpenLogin, isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 text-deep-blue font-extrabold text-2xl cursor-pointer">
            <GraduationCap className="text-neo-mint" size={32} />
            <span>Yaham Hub</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-600">
            <a href="#" className="hover:text-neo-mint transition-colors underline-offset-8 hover:underline">Soko la Ajira</a>
            <a href="#" className="hover:text-neo-mint transition-colors underline-offset-8 hover:underline">CV Builder</a>
            <a href="#" className="hover:text-neo-mint transition-colors underline-offset-8 hover:underline">Study Library</a>
            
            {/* MABORESHO: Kitufe sasa kinatuma path ya /dashboard kitalamu */}
            {!isLoggedIn ? (
              <button 
                onClick={() => onOpenLogin("/dashboard")} 
                className="bg-deep-blue text-white px-7 py-3 rounded-2xl font-bold hover:bg-neo-mint hover:text-deep-blue hover:shadow-lg hover:shadow-neo-mint/20 transition-all active:scale-95"
              >
                Ingia / Jisajili
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 bg-neo-mint text-deep-blue rounded-full flex items-center justify-center text-xs font-black">
                  YH
                </div>
                <span className="text-deep-blue text-sm font-bold">Akaunti Yangu</span>
              </div>
            )}
          </div>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden text-deep-blue p-2 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-xl">
            <a href="#" className="font-bold text-slate-700 text-lg">Soko la Ajira</a>
            <a href="#" className="font-bold text-slate-700 text-lg">CV Builder</a>
            <a href="#" className="font-bold text-slate-700 text-lg">Study Library</a>
            
            {!isLoggedIn && (
              <button 
                onClick={() => { onOpenLogin("/dashboard"); setIsOpen(false); }}
                className="bg-deep-blue text-white w-full py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform"
              >
                Ingia / Jisajili
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}