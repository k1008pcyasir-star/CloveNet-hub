import { Link } from 'react-router-dom';
import { ArrowLeft, Gavel } from 'lucide-react';
import Header from '../../components/Header';

export default function LawFaq() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <Link to="/" className="flex items-center gap-2 text-neo-mint font-bold mb-8 hover:underline italic">
          <ArrowLeft size={20} /> Rudi Nyuma
        </Link>
        <h1 className="text-4xl font-black text-deep-blue mb-12 uppercase italic">Sheria (Law) FAQ</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 text-center">
          <Gavel className="mx-auto text-neo-mint mb-4" size={40} />
          <p className="text-slate-500 font-medium tracking-tight">Mkusanyiko wa maswali ya kitalamu kwa Wanasheria wa Tanzania.</p>
        </div>
      </main>
    </div>
  );
}