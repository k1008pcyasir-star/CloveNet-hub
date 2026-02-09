import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import Header from '../../components/Header';

export default function HRFaq() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <Link to="/" className="flex items-center gap-2 text-neo-mint font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Rudi Nyuma
        </Link>
        <h1 className="text-4xl font-black text-deep-blue mb-12 uppercase">Human Resources (HR) FAQ</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
           <p className="text-slate-500">Maswali ya kitalamu ya usimamizi wa rasilimali watu.</p>
        </div>
      </main>
    </div>
  );
}