import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Monitor, Stethoscope, Calculator, Gavel, Settings, Truck, Users } from 'lucide-react';

export default function InterviewFAQ() {
  const kadas = [
    { id: 'general', title: 'General Questions', icon: <Lightbulb />, path: '/faq/general' },
    { id: 'it', title: 'Information Technology (IT)', icon: <Monitor />, path: '/faq/it' },
    { id: 'afya', title: 'Sekta ya Afya', icon: <Stethoscope />, path: '/faq/afya' },
    { id: 'accountant', title: 'Uhasibu (Accountants)', icon: <Calculator />, path: '/faq/accountant' },
    { id: 'engineering', title: 'Engineering', icon: <Settings />, path: '/faq/engineering' },
    { id: 'law', title: 'Sheria (Law)', icon: <Gavel />, path: '/faq/law' },
    { id: 'procurement', title: 'Procurement & Supply', icon: <Truck />, path: '/faq/procurement' },
    { id: 'hr', title: 'Human Resources (HR)', icon: <Users />, path: '/faq/hr' },
  ];

  return (
    /* ONGEZA ID HAPA: Muhimu kwa ajili ya scroll kutoka ServiceGrid */
    <section id="interview-faq" className="bg-slate-50 py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neo-mint font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
          <h2 className="text-3xl md:text-5xl font-black text-deep-blue mt-2 uppercase tracking-tighter">
            Chagua Kada Yako
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
            Pata maswali ya usaili yaliyochujwa kitalamu kulingana na fani yako.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kadas.map((kada) => (
            <Link 
              to={kada.path} 
              key={kada.id} 
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-neo-mint transition-all group text-center relative overflow-hidden"
            >
              {/* Kipengele cha urembo kinachotokea ukigusa kadi */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-neo-mint/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-deep-blue group-hover:bg-neo-mint group-hover:text-deep-blue transition-all duration-300 shadow-inner relative z-10">
                {React.cloneElement(kada.icon, { size: 28 })}
              </div>
              
              <h3 className="text-lg font-black text-deep-blue mb-2 relative z-10">{kada.title}</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed relative z-10">
                Bonyeza hapa kupata maswali ya usaili ya {kada.title}.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}