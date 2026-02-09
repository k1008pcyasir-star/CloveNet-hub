import { useState, useEffect } from 'react';
import { PlusCircle, Briefcase, MapPin, Calendar, Save, Link as LinkIcon, ShieldAlert, Trash2, Edit3, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [fursaZilizopo, setFursaZilizopo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  // Fomu yenye vipengele vyote muhimu kitalamu
  const [fursa, setFursa] = useState({
    title: '', 
    company: '', 
    location: '', 
    type: 'Job', 
    deadline: '', 
    url: '' 
  });

  // Pakua data pindi ukurasa unapoamka
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fursa_data')) || [];
    setFursaZilizopo(data);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if(!fursa.url.includes('http')) {
      alert("Mkuu, hakikisha URL inaanza na http:// au https://");
      return;
    }

    let orodhaMpya;
    if (isEditing) {
      // Logic ya KUHARIRI (Edit)
      orodhaMpya = fursaZilizopo.map(f => 
        f.id === currentId ? { ...fursa, id: currentId, color: fursa.type === 'Scholarship' ? 'bg-blue-50 text-blue-600' : 'bg-neo-mint/10 text-neo-mint' } : f
      );
      alert("Marekebisho yamehifadhiwa kitalamu!");
    } else {
      // Logic ya KUPOST MPYA
      const fursaMpya = { 
        ...fursa, 
        id: Date.now(),
        color: fursa.type === 'Scholarship' ? 'bg-blue-50 text-blue-600' : 'bg-neo-mint/10 text-neo-mint'
      };
      orodhaMpya = [fursaMpya, ...fursaZilizopo];
      alert("Fursa mpya ya kweli imepostiwa!");
    }

    localStorage.setItem('fursa_data', JSON.stringify(orodhaMpya));
    setFursaZilizopo(orodhaMpya);
    resetForm();
  };

  const resetForm = () => {
    setFursa({ title: '', company: '', location: '', type: 'Job', deadline: '', url: '' });
    setIsEditing(false);
    setCurrentId(null);
  };

  const handleEdit = (f) => {
    setFursa(f);
    setCurrentId(f.id);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Inapandisha kioo juu kitalamu
  };

  const handleDelete = (id) => {
    if(window.confirm("Je, una uhakika unataka kufuta fursa hii kitalamu?")) {
      const orodhaMpya = fursaZilizopo.filter(f => f.id !== id);
      localStorage.setItem('fursa_data', JSON.stringify(orodhaMpya));
      setFursaZilizopo(orodhaMpya);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* ONYO LA USALAMA */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-700 text-sm font-bold">
          <ShieldAlert size={20} />
          <span>ILANI: Ukurasa huu ni wa siri. Ni wewe tu unapaswa kuuona kitalamu.</span>
        </div>

        {/* SECTION YA FOMU */}
        <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl border border-slate-100 mb-12">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${isEditing ? 'bg-amber-100 text-amber-600' : 'bg-neo-mint/20 text-deep-blue'}`}>
                {isEditing ? <Edit3 size={32} /> : <PlusCircle size={32} />}
              </div>
              <div>
                <h1 className="text-3xl font-black text-deep-blue">{isEditing ? 'Edit Fursa' : 'Admin Control'}</h1>
                <p className="text-slate-400 font-medium">{isEditing ? 'Rekebisha makosa yako hapa.' : 'Post fursa mpya za kweli za Tanzania.'}</p>
              </div>
            </div>
            {isEditing && (
              <button onClick={resetForm} className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all">
                <X size={24} />
              </button>
            )}
          </div>

          <form onSubmit={handlePost} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1">Kichwa cha Fursa</label>
              <input type="text" value={fursa.title} placeholder="Mfano: NMB Graduate Trainee" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint transition-all" onChange={(e) => setFursa({...fursa, title: e.target.value})} required />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1">Kampuni</label>
              <input type="text" value={fursa.company} placeholder="Mfano: NMB Bank" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint transition-all" onChange={(e) => setFursa({...fursa, company: e.target.value})} required />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1">Location (Eneo)</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 text-slate-400" size={18} />
                <input type="text" value={fursa.location} placeholder="Dar es Salaam, TZ" className="w-full pl-12 p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint transition-all" onChange={(e) => setFursa({...fursa, location: e.target.value})} required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1">Aina ya Fursa</label>
              <select value={fursa.type} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint transition-all appearance-none" onChange={(e) => setFursa({...fursa, type: e.target.value})}>
                <option value="Job">Ajira (Job)</option>
                <option value="Scholarship">Scholarship</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1">Deadline</label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-4 text-slate-400" size={18} />
                <input type="text" value={fursa.deadline} placeholder="Feb 28, 2026" className="w-full pl-12 p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint transition-all" onChange={(e) => setFursa({...fursa, deadline: e.target.value})} required />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-deep-blue uppercase ml-1 tracking-tighter text-neo-mint">URL ya Tangazo (Link)</label>
              <div className="relative flex items-center">
                <LinkIcon className="absolute left-4 text-slate-400" size={18} />
                <input type="url" value={fursa.url} placeholder="https://..." className="w-full pl-12 p-4 bg-slate-50 border border-neo-mint/30 rounded-2xl outline-none focus:border-neo-mint transition-all text-sm" onChange={(e) => setFursa({...fursa, url: e.target.value})} required />
              </div>
            </div>

            <button className={`md:col-span-2 w-full py-5 rounded-[24px] font-black text-lg transition-all flex items-center justify-center gap-3 mt-6 ${isEditing ? 'bg-amber-500 text-white shadow-amber-200' : 'bg-deep-blue text-white shadow-deep-blue/20'} hover:shadow-2xl active:scale-95`}>
              <Save /> {isEditing ? 'HIFADHI MAREKEBISHO' : 'POST FURSA SASA'}
            </button>
          </form>
        </div>

        {/* LIST YA FURSA ZILIZOPO - Kwa ajili ya Management */}
        <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-xl overflow-hidden">
          <h2 className="text-2xl font-black text-deep-blue mb-8">Fursa Zilizopo Mfumo (Manage)</h2>
          <div className="space-y-4">
            {fursaZilizopo.map((f) => (
              <div key={f.id} className="flex flex-wrap items-center justify-between p-6 bg-slate-50 rounded-[30px] border border-slate-100 hover:border-neo-mint transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${f.type === 'Scholarship' ? 'bg-blue-100 text-blue-600' : 'bg-neo-mint/20 text-deep-blue'}`}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue">{f.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{f.company} • {f.location} • {f.deadline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <button onClick={() => handleEdit(f)} className="p-3 bg-white text-amber-500 rounded-2xl hover:bg-amber-500 hover:text-white transition-all shadow-sm">
                    <Edit3 size={18} />
                  </button>
                  <button onClick={() => handleDelete(f.id)} className="p-3 bg-white text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {fursaZilizopo.length === 0 && (
              <div className="text-center py-10">
                <p className="text-slate-400 italic">Bado hakuna fursa zilizopostiwa kitalamu.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}