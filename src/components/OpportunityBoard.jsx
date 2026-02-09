import { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight, ExternalLink } from "lucide-react";

export default function OpportunityBoard() {
  const [fursaZote, setFursaZote] = useState([]);

  useEffect(() => {
    // 1. Chotea data kutoka LocalStorage
    const dataHifadhi = JSON.parse(localStorage.getItem('fursa_data')) || [];
    
    // 2. Kama hakuna ulichoposti, tuonyeshe zile za mfano (default)
    if (dataHifadhi.length === 0) {
      const defaultData = [
        { id: 1, title: "Scholarship - Uturuki 2026", company: "Turkiye Burslari", location: "Dar es Salaam", type: "Scholarship", deadline: "Feb 20, 2026", color: "bg-blue-50 text-blue-600", url: "#" },
        { id: 2, title: "Graduate Trainee Program", company: "NMB Bank PLC", location: "Tanzania", type: "Job", deadline: "Feb 15, 2026", color: "bg-neo-mint/10 text-neo-mint", url: "#" }
      ];
      setFursaZote(defaultData);
    } else {
      setFursaZote(dataHifadhi);
    }
  }, []);

  return (
    <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-deep-blue">Fursa Zinazokufaa Tanzania</h2>
          <p className="text-slate-500 mt-2">AI imekuchujia fursa hizi za moto kulingana na mahitaji ya soko letu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fursaZote.map((fursa) => (
            <div key={fursa.id} className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-neo-mint transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${fursa.type === 'Scholarship' ? 'bg-blue-100' : 'bg-neo-mint/20'}`}>
                  {fursa.type === 'Scholarship' ? <GraduationCap className="text-blue-600" /> : <Briefcase className="text-deep-blue" />}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${fursa.color}`}>
                  {fursa.type}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-deep-blue mb-4 group-hover:text-neo-mint transition-colors">
                {fursa.title}
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                  <MapPin size={16} className="text-slate-300" />
                  <span>{fursa.location}</span>
                </div>
                <div className="flex items-center gap-3 text-red-400 text-sm font-bold">
                  <Calendar size={16} />
                  <span>Mwisho: {fursa.deadline}</span>
                </div>
              </div>

              {/* KITUFE AMBACHO KINA LINK YA KWELI SASA */}
              <a 
                href={fursa.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-slate-50 text-deep-blue rounded-2xl font-bold group-hover:bg-deep-blue group-hover:text-white transition-all flex items-center justify-center gap-2 text-center"
              >
                Angalia Fursa <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}