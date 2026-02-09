import React from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle } from 'lucide-react';

export default function CvPreview({ cvData }) {
  return (
    <div className="flex-1 bg-slate-200/40 p-8 lg:p-20 flex justify-center items-start overflow-y-auto h-full scrollbar-hide">
      {/* KARATASI YA A4 (Standard Ratio) */}
      <div id="cv-paper" className="bg-white w-full max-w-[595px] min-h-[842px] shadow-2xl rounded-sm p-12 relative overflow-hidden flex flex-col transition-all duration-500 hover:shadow-neo-mint/10">
        
        {/* DESIGN ELEMENT: Line ya pembeni ya Deep Blue */}
        <div className="absolute top-0 left-0 w-2 h-full bg-deep-blue"></div>

        {/* HEADER SECTION */}
        <header className="border-b-2 border-slate-100 pb-8">
          <h1 className="text-4xl font-black text-deep-blue uppercase tracking-tighter leading-none mb-4 break-words">
            {cvData.fullName || 'Jina Lako Kamili'}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <Mail size={12} className="text-neo-mint" />
              <span>{cvData.email || 'barua@pepe.com'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={12} className="text-neo-mint" />
              <span>{cvData.phone || '+255 000 000 000'}</span>
            </div>
          </div>
        </header>

        {/* BODY SECTION */}
        <div className="mt-10 space-y-10 flex-1">
          
          {/* EDUCATION SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-deep-blue text-white rounded-md flex items-center justify-center text-[10px] font-bold">ED</div>
              <h3 className="font-black text-deep-blue text-xs uppercase tracking-widest">Elimu na Mafunzo</h3>
            </div>
            <div className="pl-8 border-l-2 border-slate-50">
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium italic">
                {cvData.education || 'Maelezo ya elimu yako yataonekana hapa pindi utakapoanza kuandika upande wa kushoto...'}
              </p>
            </div>
          </section>

          {/* EXPERIENCE SECTION (Placeholder kwa sasa) */}
          <section className="opacity-40">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-slate-200 text-slate-400 rounded-md flex items-center justify-center text-[10px] font-bold">EX</div>
              <h3 className="font-black text-slate-400 text-xs uppercase tracking-widest">Uzoefu wa Kazi</h3>
            </div>
            <div className="h-4 bg-slate-50 rounded-full w-3/4 mb-3 animate-pulse"></div>
            <div className="h-4 bg-slate-50 rounded-full w-1/2 animate-pulse"></div>
          </section>

        </div>

        {/* FOOTER: Yaham Hub Watermark */}
        <footer className="mt-auto pt-8 border-t border-slate-50 flex justify-between items-center opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-neo-mint" />
            <span className="text-[9px] font-black text-deep-blue uppercase tracking-tighter">AI Optimized by Yaham Hub v2</span>
          </div>
          <span className="text-[8px] font-bold text-slate-400 uppercase italic">Page 1 of 1</span>
        </footer>

      </div>
    </div>
  );
}