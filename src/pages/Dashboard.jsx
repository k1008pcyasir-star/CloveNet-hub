import { useState } from 'react';
import { LayoutDashboard, FileText, Briefcase, BookOpen, MessageSquare, LogOut, Bell, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State ya kufungua menu kwenye simu
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] relative">
      
      {/* 1. MOBILE TOP BAR (Inatokea kwenye simu tu) */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-deep-blue text-white p-4 flex justify-between items-center z-[60] shadow-lg">
        <div className="flex items-center gap-2 font-black text-neo-mint tracking-tighter">
          <LayoutDashboard size={24} />
          <span>Yaham Hub</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white/10 rounded-lg text-neo-mint active:scale-95 transition-transform"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* 2. SIDEBAR (Sasa ni Responsive) */}
      <aside className={`
        fixed inset-y-0 left-0 z-[70] w-72 bg-deep-blue text-white p-8 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:block
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="text-2xl font-black text-neo-mint mb-12 flex items-center gap-2 tracking-tighter">
          <div className="p-2 bg-neo-mint/10 rounded-lg"><LayoutDashboard size={28}/></div>
          Yaham Hub
        </div>
        
        <nav className="space-y-2 flex-1">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<FileText size={20}/>} label="AI CV Builder" />
          <NavItem icon={<Briefcase size={20}/>} label="Jobs & Scholarships" />
          <NavItem icon={<MessageSquare size={20}/>} label="Interview Coach" />
          <NavItem icon={<BookOpen size={20}/>} label="Study Library" />
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-4 text-red-400 hover:text-red-300 font-bold transition-all p-4 rounded-2xl hover:bg-white/5"
        >
          <LogOut size={20}/> Toka Nje
        </button>
      </aside>

      {/* 3. BACKDROP (Inaziba kioo Sidebar ikiwa wazi kwenye simu) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[65] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 4. MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 mt-16 lg:mt-0">
        <header className="hidden lg:flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-black text-deep-blue">Habari, Yasir! 👋</h2>
            <p className="text-slate-500 font-medium">Karibu kwenye kituo chako cha mafanikio.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400"><Bell size={20}/></button>
            <div className="w-12 h-12 bg-neo-mint rounded-2xl flex items-center justify-center text-deep-blue font-bold shadow-lg shadow-neo-mint/20">YY</div>
          </div>
        </header>

        {/* Maonyesho ya Simu (Kwa maudhui ya kadi) */}
        <div className="lg:hidden mb-8">
           <h2 className="text-2xl font-black text-deep-blue">Habari, Yasir! 👋</h2>
           <p className="text-slate-400 text-sm">Umefika sebuleni kitalamu.</p>
        </div>

        {/* CONTENT GRID (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-deep-blue md:text-xl text-sm uppercase tracking-tight">AI Profile Strength</h3>
              <span className="text-neo-mint font-black text-xl md:text-2xl">90%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 md:h-4 rounded-full overflow-hidden">
              <div className="bg-deep-blue h-full w-[90%] rounded-full shadow-[0_0_20px_rgba(42,245,152,0.4)]"></div>
            </div>
            <p className="text-slate-400 text-[11px] md:text-sm mt-4">Bado hatua moja tu kufikia 100%! <span className="text-deep-blue font-bold">Kamilisha hapa</span></p>
          </div>
          
          <div className="bg-deep-blue p-8 md:p-10 rounded-[32px] md:rounded-[40px] text-white flex flex-col justify-center">
             <p className="opacity-60 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Applied Jobs</p>
             <h3 className="text-4xl md:text-5xl font-black text-neo-mint">12</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl font-bold cursor-pointer transition-all ${active ? 'bg-white/10 text-neo-mint shadow-inner' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      {icon} {label}
    </div>
  );
}