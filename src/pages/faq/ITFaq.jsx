import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Laptop, Cpu, Monitor, Database } from 'lucide-react';
import Header from '../../components/Header';

function ITFaq() {
  const vipengele = [
    { id: 'networking', title: 'Networking & Security', icon: <Globe />, path: '/faq/it/networking' },
    { id: 'programming', title: 'Programming & Web Dev', icon: <Laptop />, path: '/faq/it/programming' },
    { id: 'ai-ml', title: 'AI, Machine Learning & Data Science', icon: <Database />, path: '/faq/it/ai-ml' },
    { id: 'hardware', title: 'Hardware & Troubleshooting', icon: <Cpu />, path: '/faq/it/hardware' },
    { id: 'software', title: 'General Software & OS', icon: <Monitor />, path: '/faq/it/software' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta">
      <Header />
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON - TIBA YA KERO YA USER */}
        <Link 
          to="/#interview-faq" 
          className="inline-flex items-center gap-2 px-6 py-2 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-12 hover:bg-deep-blue hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* SECTION TITLE - SASA IPO KATIKATI */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-deep-blue uppercase tracking-tighter">
            IT: Chagua Kipengele
          </h1>
          <p className="text-slate-500 font-medium mt-2 italic max-w-2xl mx-auto">
            Mkusanyiko wa maswali ya kiufundi kwa kada 5 kuu za Teknolojia.
          </p>
        </div>
        
        {/* KADA GRID - WATOTO 5 WA MAMA IT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipengele.map((v) => (
            <Link 
              to={v.path} 
              key={v.id} 
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-neo-mint transition-all group relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-deep-blue group-hover:bg-neo-mint transition-colors relative z-10">
                {v.icon}
              </div>
              <h3 className="text-xl font-black text-deep-blue mb-2 relative z-10">{v.title}</h3>
              <p className="text-slate-400 text-sm font-medium relative z-10">
                Bofya hapa kupata maswali ya usaili kuhusu {v.title}.
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ITFaq;