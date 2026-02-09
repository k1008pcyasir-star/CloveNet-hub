import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Users, TestTube2, Pill, Globe2 } from 'lucide-react';
import Header from '../../components/Header';

function AfyaFaq() {
  const subKadas = [
    { id: 'clinical', title: 'Clinical Medicine', icon: <Stethoscope size={32} />, path: '/faq/afya/clinical' },
    { id: 'nursing', title: 'Nursing & Midwifery', icon: <Users size={32} />, path: '/faq/afya/nursing' },
    { id: 'laboratory', title: 'Laboratory Sciences', icon: <TestTube2 size={32} />, path: '/faq/afya/laboratory' },
    { id: 'pharmacy', title: 'Pharmacy', icon: <Pill size={32} />, path: '/faq/afya/pharmacy' },
    { id: 'public-health', title: 'Public Health', icon: <Globe2 size={32} />, path: '/faq/afya/public-health' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta">
      <Header />
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON - Tiba ya kero kurudi moja kwa moja kwenye kadi */}
        <div className="flex justify-start mb-8">
          <Link 
            to="/#interview-faq" 
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-deep-blue text-deep-blue font-bold rounded-xl hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>

        {/* SECTION TITLE - Ipo Kati Kitalamu */}
        <div className="text-center mb-16">
          <span className="text-neo-mint font-bold uppercase tracking-widest text-xs">Medical & Health Hub</span>
          <h1 className="text-4xl md:text-5xl font-black text-deep-blue uppercase tracking-tighter mt-2">
            SEKTA YA AFYA: CHAGUA KITENGO
          </h1>
          <div className="w-24 h-1.5 bg-neo-mint mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 font-medium mt-6 max-w-xl mx-auto italic leading-relaxed">
            Mkusanyiko wa maswali ya usaili yaliyoboreshwa kwa ajili ya kada mbalimbali za afya nchini Tanzania.
          </p>
        </div>
        
        {/* KADA GRID - Watoto wa Mama Afya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subKadas.map((sub) => (
            <Link 
              to={sub.path} 
              key={sub.id} 
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-neo-mint transition-all group relative overflow-hidden text-center"
            >
              {/* Icon Holder */}
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-deep-blue group-hover:bg-neo-mint transition-colors relative z-10 shadow-inner">
                {sub.icon}
              </div>
              <h3 className="text-xl font-black text-deep-blue mb-3 relative z-10 group-hover:text-neo-mint transition-colors">
                {sub.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium relative z-10 leading-relaxed">
                Maswali ya usaili kwa wataalamu wa {sub.title}.
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AfyaFaq;