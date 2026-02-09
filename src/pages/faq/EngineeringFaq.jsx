import { Link } from 'react-router-dom';
import { ArrowLeft, HardHat, Zap, Cog, PencilRuler } from 'lucide-react';
import Header from '../../components/Header';

export default function EngineeringFaq() {
  const subEng = [
    { id: 'civil', title: 'Civil Engineering', icon: <HardHat /> },
    { id: 'electrical', title: 'Electrical Engineering', icon: <Zap /> },
    { id: 'mechanical', title: 'Mechanical Engineering', icon: <Cog /> },
    { id: 'architect', title: 'Architecture (Wasanifu)', icon: <PencilRuler /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <Link to="/" className="flex items-center gap-2 text-neo-mint font-bold mb-8 hover:underline italic">
          <ArrowLeft size={20} /> Rudi Nyuma
        </Link>
        <h1 className="text-4xl font-black text-deep-blue mb-4 uppercase">ENGINEERING: CHAGUA KADA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {subEng.map((s) => (
            <div key={s.id} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:border-neo-mint cursor-pointer group transition-all text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-deep-blue group-hover:bg-neo-mint transition-colors">{s.icon}</div>
              <h3 className="font-black text-deep-blue">{s.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}