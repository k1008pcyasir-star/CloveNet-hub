import React, { useState } from 'react';
import { PlusCircle, FileText, Sparkles, ArrowRight, Layout } from 'lucide-react';
import CvEditor from './CvEditor'; // Tutatengeneza hili sasa hivi
import CvPreview from './CvPreview'; // Tutatengeneza hili sasa hivi

const CvDashboard = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [cvData, setCvData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  if (!isCreating) {
    return (
      <div className="min-h-screen bg-slate-50 font-jakarta">
        <nav className="bg-white border-b border-slate-100 px-6 py-4">
           <div className="max-w-6xl mx-auto flex items-center gap-2 text-deep-blue font-black text-xl">
             <Layout className="text-neo-mint" /> Yaham Hub
           </div>
        </nav>

        <main className="max-w-6xl mx-auto pt-12 pb-20 px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-deep-blue mb-2 uppercase tracking-tighter">
              AI CV Builder <span className="text-neo-mint">v2</span>
            </h1>
            <p className="text-slate-500 font-medium">Andaa wasifu wako kitalamu kwa kutumia nguvu ya AI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div 
              onClick={() => setIsCreating(true)}
              className="bg-white p-8 rounded-[40px] border-2 border-slate-100 shadow-sm hover:border-neo-mint transition-all group cursor-pointer active:scale-95"
            >
              <div className="w-16 h-16 bg-neo-mint/10 rounded-2xl flex items-center justify-center text-neo-mint mb-6">
                <PlusCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">Tengeneza CV Mpya</h3>
              <p className="text-slate-400 mb-6">Mchakato wa dakika 5 unaoongozwa na AI.</p>
              <button className="flex items-center gap-2 font-bold text-deep-blue group-hover:gap-4 transition-all">
                Anza Sasa <ArrowRight size={20} className="text-neo-mint" />
              </button>
            </div>

            <div className="bg-deep-blue p-8 rounded-[40px] shadow-xl text-white cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-neo-mint mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Wasifu Wako</h3>
              <p className="text-slate-400 mb-6">Archive ya CV zako zote ulizotengeneza.</p>
              <div className="flex items-center gap-2 font-bold text-neo-mint">
                Angalia Drafts (2) <Sparkles size={18} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // HAPA NDIPO TUNAPOITUMIA "MODULAR LOGIC"
  return (
    <div className="min-h-screen bg-white font-jakarta flex flex-col">
       <nav className="border-b border-slate-100 px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-50">
          <button onClick={() => setIsCreating(false)} className="text-slate-500 font-bold">RUDI</button>
          <div className="text-xs font-black uppercase tracking-widest text-slate-300">Workspace Mode</div>
          <button className="bg-neo-mint text-deep-blue px-4 py-2 rounded-full font-black text-xs">HIFADHI</button>
       </nav>

       <div className="flex flex-col lg:flex-row flex-1">
          {/* Editor: Kwa ajili ya maswali ya AI */}
          <CvEditor cvData={cvData} setCvData={setCvData} />
          
          {/* Preview: Kwa ajili ya muonekano wa karatasi */}
          <CvPreview cvData={cvData} />
       </div>
    </div>
  );
};

export default CvDashboard;