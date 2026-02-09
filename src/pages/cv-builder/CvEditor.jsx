import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Settings, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CvEditor({ cvData, setCvData }) {
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 p-8 lg:p-20 bg-slate-50/50 overflow-y-auto h-full">
      <div className="max-w-md mx-auto">
        {/* PROGRESS INDICATOR */}
        <div className="flex items-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`flex-1 h-2 rounded-full transition-all duration-500 ${step >= i ? 'bg-neo-mint shadow-[0_0_10px_rgba(45,212,191,0.5)]' : 'bg-slate-200'}`} />
          ))}
        </div>

        {/* STEP 1: PERSONAL INFO */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-12 h-12 bg-neo-mint/10 rounded-2xl flex items-center justify-center text-neo-mint mb-6">
              <User size={24} />
            </div>
            <h2 className="text-3xl font-black text-deep-blue mb-2 tracking-tighter uppercase">Taarifa Binafsi</h2>
            <p className="text-slate-500 mb-8 font-medium italic">Anza kwa kutuambia wewe ni nani kitalamu.</p>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Jina Kamili</label>
                <input name="fullName" value={cvData.fullName} onChange={handleChange} placeholder="Mfano: Yasir Yaham" className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-neo-mint outline-none font-bold transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Barua Pepe</label>
                <input name="email" value={cvData.email} onChange={handleChange} placeholder="yasir@yaham.com" className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-neo-mint outline-none font-bold transition-all" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: EDUCATION */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-12 h-12 bg-neo-mint/10 rounded-2xl flex items-center justify-center text-neo-mint mb-6">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-black text-deep-blue mb-2 tracking-tighter uppercase">Elimu Yako</h2>
            <p className="text-slate-500 mb-8 font-medium italic">Orodhesha mafanikio yako ya kitaaluma.</p>
            <textarea name="education" value={cvData.education} onChange={handleChange} rows="5" placeholder="Mfano: Bachelor of Science in IT - UDSM (2020-2023)" className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-neo-mint outline-none font-bold transition-all resize-none" />
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-4 mt-12">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="flex-1 bg-white border-2 border-slate-100 py-4 rounded-2xl font-black text-deep-blue hover:bg-slate-50 active:scale-95 transition-all text-xs tracking-widest">
              <ArrowLeft size={16} className="inline mr-2" /> RUDI
            </button>
          )}
          <button 
            onClick={() => step < 4 ? setStep(step + 1) : alert("AI inaproof-read CV yako...")}
            className="flex-[2] bg-deep-blue text-white py-4 rounded-2xl font-black hover:shadow-xl hover:shadow-deep-blue/20 active:scale-95 transition-all text-xs tracking-widest flex items-center justify-center gap-2"
          >
            {step === 4 ? 'MALIZA' : 'ENDELEA'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}