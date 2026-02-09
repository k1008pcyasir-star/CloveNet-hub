import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Package, ClipboardCheck, BarChart3 } from 'lucide-react';
import Header from '../../components/Header';

export default function ProcurementFaq() {
  const subProcure = [
    { id: 'supply', title: 'Supply Chain Management', icon: <Truck /> },
    { id: 'tendering', title: 'Tendering & Bidding', icon: <ClipboardCheck /> },
    { id: 'inventory', title: 'Inventory Control', icon: <Package /> },
    { id: 'logistics', title: 'Logistics Operations', icon: <BarChart3 /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <Link to="/" className="flex items-center gap-2 text-neo-mint font-bold mb-8 hover:underline italic">
          <ArrowLeft size={20} /> Rudi Nyuma
        </Link>
        <h1 className="text-4xl font-black text-deep-blue mb-4 uppercase">Procurement & Supply</h1>
        <p className="text-slate-500 mb-12">Maswali ya kitalamu kwa wataalamu wa ununuzi na ugavi Tanzania.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subProcure.map((s) => (
            <div key={s.id} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:border-neo-mint cursor-pointer group transition-all text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-deep-blue group-hover:bg-neo-mint transition-colors">
                {s.icon}
              </div>
              <h3 className="font-black text-deep-blue uppercase text-sm tracking-tighter">{s.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}